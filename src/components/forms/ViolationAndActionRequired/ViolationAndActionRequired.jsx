import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ViolationAndActionRequired.module.css';

const ViolationAndActionRequired = ({ 
  onViolationChange = () => {}, 
  onActionChange = () => {},
  violationValue = null,
  actionValue = null 
}) => {
  const [isViolation, setIsViolation] = useState(violationValue);
  const [selectedAction, setSelectedAction] = useState(actionValue);
  const location = useLocation();
  const isRoute1 = /^\/1(?:$|\/)/.test(location.pathname || '');



  useEffect(() => {
    setIsViolation(violationValue);
  }, [violationValue]);

  useEffect(() => {
    setSelectedAction(actionValue);
  }, [actionValue]);

  const handleViolationChange = (value) => {
    setIsViolation(value);
    onViolationChange(value);
    
    // Reset action when violation changes
    if (value === false) {
      setSelectedAction(null);
      onActionChange(null);
    }
  };

  const handleActionChange = (value) => {
    setSelectedAction(value);
    onActionChange(value);
  };

  const actionOptions = [
    { value: 'no-action', label: 'No Action Required' },
    { value: 'warning-email', label: 'Send Warning Email' },
    { value: 'cot-letter', label: 'COT Letter from Employee' },
    { value: 'apology-letter', label: 'Apology Letter from Employee' }
  ];

  // Set body class and inline styles for route-based styling
  const isRoute3Or4 = /^\/(3|4)(?:$|\/)/.test(location.pathname);
  
  // Inline styles with CSS custom properties - absolute highest priority
  const radioColor = isRoute3Or4 ? '#38AEE0' : '#838383';
  
  // Add a class to container for targeting
  const radioClassName = isRoute3Or4 ? 'blue-radios-violation' : 'gray-radios-violation';

  const containerClasses = [
    styles.container,
    radioClassName,
    isRoute3Or4 ? styles.blueRadios : styles.grayRadios
  ].filter(Boolean).join(' ');
  
  useEffect(() => {
    if (isRoute3Or4) {
      document.body.classList.add('route-3-4', 'route-3', 'route-4');
      document.body.classList.remove('route-5');
    } else {
      document.body.classList.add('route-5');
      document.body.classList.remove('route-3-4', 'route-3', 'route-4');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('route-3-4', 'route-3', 'route-4', 'route-5');
    };
  }, [location.pathname]);

  return (
    <div className={containerClasses}>
      {/* IS Violation Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>IS Violation?</h3>
        <div className={styles.recipientTypeLabel}>Recipient Type</div>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="violation"
              value="yes"
              checked={isViolation === true}
              onChange={() => handleViolationChange(true)}
              className={styles.radioInput}
              data-violation-radio="true"
              style={{ accentColor: radioColor }}
            />
            <span className={`${styles.optionLabel} ${isViolation === true ? styles.selected : ''}`}>
              Yes
            </span>
          </label>
          
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="violation"
              value="no"
              checked={isViolation === false}
              onChange={() => handleViolationChange(false)}
              className={styles.radioInput}
              data-violation-radio="true"
              style={{ accentColor: radioColor }}
            />
            <span className={`${styles.optionLabel} ${isViolation === false ? styles.selected : ''}`}>
              No
            </span>
          </label>
        </div>
      </div>

      {/* Action Required Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Action Required</h3>
        <div className={styles.recipientTypeLabel}>Recipient Type</div>
        <div className={styles.radioGroup}>
          {actionOptions.map((option) => (
            <label key={option.value} className={styles.radioLabel}>
              <input
                type="radio"
                name="action"
                value={option.value}
                checked={selectedAction === option.value}
                onChange={() => handleActionChange(option.value)}
                disabled={isViolation === false}
                className={styles.radioInput}
                data-violation-radio="true"
                style={{ accentColor: radioColor }}
              />
              <span className={`${styles.optionLabel} ${selectedAction === option.value ? styles.selected : ''} ${isViolation === false ? styles.disabled : ''}`}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViolationAndActionRequired;