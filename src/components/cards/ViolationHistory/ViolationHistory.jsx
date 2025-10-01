import React, { useMemo, useState } from 'react';
import styles from './ViolationHistory.module.css';
import downloadIcon from '../../../assets/download-28.svg';
import IncidentType from '../../forms/IncidentType/IncidentType';
import IncidentInput from '../../forms/IncidentInput/IncidentInput';
import IncidentCategory from '../../forms/IncidentCategory/IncidentCategory';
import calendarIcon from '../../../assets/calendar-16x18.svg';
import IncidentDescription from '../../forms/IncidentDescription/IncidentDescription';
import UploadFile from '../../ui/UploadFile/UploadFile';
import FileCard from '../FileCard/FileCard';
import OptionalApprovers from '../../ui/OptionalApprovers/OptionalApprovers';
import EmployeeJustification from '../../forms/EmployeeJustification/EmployeeJustification';
import CommentBox from '../../forms/CommentBox/CommentBox';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
import ViolationAndActionRequired from '../../forms/ViolationAndActionRequired/ViolationAndActionRequired';
import TransferWorkflow from '../../ui/TransferWorkflow/TransferWorkflow';
import { useLocation } from 'react-router-dom';

// Small sample data matching the JSON/spec screenshot
const SAMPLE_DATA = [
  {
    id: 1,
    workFlowId: '662_10057153',
    incidentDate: '24-May-2024',
    incidentCategory: 'Storage device found during exit Check',
    wfStatus: 'Approved'
  }
];

export default function ViolationHistory({ data = SAMPLE_DATA, title = 'Violation History of the Employee', useFileCard = false }) {
  const filtered = useMemo(() => data, [data]);
  const location = useLocation();
  const showEmployeeJustification = /^\/(2|3|4|5)(?:$|\/)/.test(location.pathname || '');
  const showViolationAndAction = /^\/(3|4|5)(?:$|\/)/.test(location.pathname || '');
  
  // Check if we're on route /3 or /4 to show "Approve" instead of "Submit"
  const isRoute3Or4 = /^\/(3|4)(?:$|\/)/.test(location.pathname || '');
  const isRoute5 = /^\/5(?:$|\/)/.test(location.pathname || '');
  const buttonText = isRoute3Or4 ? 'Approve' : 'Submit';
  
  const [approvers, setApprovers] = useState([]);
  const [violationData, setViolationData] = useState({ isViolation: null, actionRequired: null });

  const handleApproversChange = (updated) => setApprovers(updated);
  
  const handleViolationChange = (value) => {
    setViolationData(prev => ({ ...prev, isViolation: value }));
  };
  
  const handleActionChange = (value) => {
    setViolationData(prev => ({ ...prev, actionRequired: value }));
  };

  return (
    <>
    <section className={styles.container} aria-labelledby="violation-title">
      <h2 id="violation-title" className={styles.title}>{title}</h2>

  {/* separator removed per request */}

      <div className={styles.tableFrame} role="table" aria-label="Violation history table">
        <div className={styles.tableHeader} role="rowgroup">
          <div className={styles.headerRow} role="row">
            <div role="columnheader" className={styles.colWorkFlowId}>Work Flow ID</div>
            <div role="columnheader" className={styles.colIncidentDate}>Incident Date</div>
            <div role="columnheader" className={styles.colIncidentCategory}>Incident Category</div>
            <div role="columnheader" className={styles.colWfStatus}>WF Status</div>
          </div>
        </div>

        <div className={styles.tableBody} role="rowgroup">
          {filtered.length === 0 ? (
            <div className={styles.emptyRow}>No records found</div>
          ) : (
            filtered.map((row) => (
              <div key={row.id} className={styles.row} role="row">
                <div className={styles.colWorkFlowId} role="cell">{row.workFlowId}</div>
                <div className={styles.colIncidentDate} role="cell">{row.incidentDate}</div>
                <div className={styles.colIncidentCategory} role="cell">{row.incidentCategory}</div>
                <div className={styles.colWfStatus} role="cell">{row.wfStatus}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
<br />
    {/* Incident Type component placed below Violation History */}
  <IncidentType />
  <br />
    <div className={styles.inputsRow}>
      <IncidentInput
        id="incident-date"
        label="Incident Date *"
        placeholder="24-May-2024"
        showAvatar={false}
        rightAddon={(<img src={calendarIcon} alt="calendar" />)}
      />

      <IncidentInput
        id="incident-category"
        label="Incident Category *"
        placeholder="Network Upload of Data (Internet)"
        showAvatar={false}
        rightAddon={(
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 6.5L7.5 11L12 6.5" stroke="rgba(28,46,69,0.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      />
    </div>
    <br /><br />
  <IncidentCategory />
  <br />
  <IncidentDescription />
  <br />
  {useFileCard ? (
    <FileCard filename="evidence.pdf" date="23 Sep, 2025 | 10:00am" size="1.2 MB" type="pdf" />
  ) : (
    <UploadFile />
  )}
  <br />
  <OptionalApprovers onApproversChange={handleApproversChange} />
  <br />
  {showEmployeeJustification && <EmployeeJustification />}
  <br />
  {showViolationAndAction && (
    <>
      <ViolationAndActionRequired 
        onViolationChange={handleViolationChange}
        onActionChange={handleActionChange}
        violationValue={violationData.isViolation}
        actionValue={violationData.actionRequired}
      />
      <br />
    </>
  )}
  {/* CommentBox - Hide on route /5 */}
  {showEmployeeJustification && !isRoute5 && <CommentBox />}
  {!isRoute5 && <br />}
  
  {/* Submit/Approve button - Hide on route /5 */}
  {!isRoute5 && (
    <div className={styles.submitRow}>
      <SubmitButton onClick={() => console.log('Submit clicked, approvers:', approvers)}>
        {buttonText}
      </SubmitButton>
    </div>
  )}
  
  {/* Transfer Workflow - Only for routes /3 and /4 - Full width wrapper */}
  {isRoute3Or4 && (
    <div className={styles.transferWorkflowWrapper}>
      <TransferWorkflow onClick={() => console.log('Transfer Workflow clicked')} />
    </div>
  )}
  </>
  );
}
