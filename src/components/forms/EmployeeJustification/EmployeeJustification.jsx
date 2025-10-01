import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './EmployeeJustification.module.css';

const EmployeeJustification = ({ value: initialValue = '', onChange }) => {
  const [value, setValue] = useState(initialValue);
  const location = useLocation();
  const isRoute5 = /^\/5(?:$|\/)/.test(location.pathname || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.label} id="employee-justification-label">Employee Justification</div>

      <div className={`${styles.inputFrame} ${isRoute5 ? styles.route5Bg : ''}`} role="region" aria-labelledby="employee-justification-label">
        <textarea
          className={styles.textarea}
          placeholder="Test"
          value={value}
          onChange={handleChange}
          rows={3}
        />

        <div className={styles.leftContent} aria-hidden="true" />
        <div className={styles.rightContent} aria-hidden="true" />
      </div>
    </div>
  );
};

export default EmployeeJustification;
