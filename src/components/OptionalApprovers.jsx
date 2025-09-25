import React, { useState } from 'react';
import styles from './OptionalApprovers.module.css';
import SubmitButton from './SubmitButton';

const OptionalApprovers = ({ 
  selectedApprovers = ['hrbp', 'groupHead', 'teamHead', 'expat'], 
  onApproversChange = () => {},
  className = ""
}) => {
  const [approvers, setApprovers] = useState(selectedApprovers);

  const approverOptions = [
    { id: 'hrbp', label: 'HRBP' },
    { id: 'groupHead', label: 'Group Head' },
    { id: 'teamHead', label: 'Team Head' },
    { id: 'expat', label: 'Expat' }
  ];

  const handleApproverChange = (approverId) => {
    const updatedApprovers = approvers.includes(approverId)
      ? approvers.filter(id => id !== approverId)
      : [...approvers, approverId];
    
    setApprovers(updatedApprovers);
    onApproversChange(updatedApprovers);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <h3 className={styles.title}>Optional Approvers</h3>
      
      <div className={styles.checkboxRow}>
        {approverOptions.map((approver) => {
          const isChecked = approvers.includes(approver.id);
          return (
            <label key={approver.id} className={styles.checkboxItem}>
              <div className={styles.customCheckboxWrapper}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleApproverChange(approver.id)}
                  className={styles.hiddenCheckbox}
                />
                <div className={`${styles.customCheckbox} ${isChecked ? styles.checked : ''}`}>
                  {isChecked && (
                    <svg 
                      className={styles.checkIcon} 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M11.5 3.5L5.25 9.75L2.5 7" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className={`${styles.label} ${isChecked ? styles.labelChecked : ''}`}>
                {approver.label}
              </span>
            </label>
          );
        })}
      </div>
      <div className={styles.submitWrap}>
        <SubmitButton onClick={() => console.log('Selected approvers:', approvers)}>
          Submit
        </SubmitButton>
      </div>
    </div>
  );
};

export default OptionalApprovers;