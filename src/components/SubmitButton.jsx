import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ onClick = () => {}, children = 'Submit', disabled = false, className = '' }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Submit"
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default SubmitButton;
