import React, { useMemo, useState } from 'react';
import styles from './ViolationHistory.module.css';
import downloadIcon from '../assets/download-28.svg';
import IncidentType from './IncidentType';
import IncidentInput from './IncidentInput';
import IncidentCategory from './IncidentCategory';
import calendarIcon from '../assets/calendar-16x18.svg';
import IncidentDescription from './IncidentDescription';
import UploadFile from './UploadFile';
import OptionalApprovers from './OptionalApprovers';

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

export default function ViolationHistory({ data = SAMPLE_DATA, title = 'Violation History of the Employee' }) {
  const filtered = useMemo(() => data, [data]);

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
  <UploadFile />
  <br />
  <OptionalApprovers />
  </>
  );
}
