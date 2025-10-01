import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './IncidentInput.module.css';

/**
 * IncidentInput
 * - Controlled (accepts value/onChange) but falls back to internal state
 * - Left avatar/icon optional
 * - Right addon/icon optional
 * - Accessible label + input
 */
export default function IncidentInput({
  id = 'incident-input',
  label = 'Incident Category *',
  value: propValue = '',
  onChange = () => {},
  placeholder = 'Select category',
  showAvatar = false,
  rightAddon = null,
  readOnly = false,
}) {
  const [value, setValue] = useState(propValue);
  const location = useLocation();
  const isRoute1 = /^\/1(?:$|\/)/.test(location.pathname || '');
  const bg = isRoute1 ? '#ffffff' : '#EEEEEE';

  useEffect(() => setValue(propValue), [propValue]);

  function handleChange(e) {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>{label}</label>

  <div className={styles.inputFrame} style={{ background: bg }}>
        <div className={styles.leftContent}>
          {showAvatar ? (
            <div className={styles.avatar} aria-hidden="true">
              {/* simple circular avatar placeholder */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#eaddff" />
                <circle cx="10" cy="8" r="3.5" fill="#4f378a" />
                <path d="M3 16c1.5-2 4-3 7-3s5.5 1 7 3" stroke="#4f378a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ) : null}

          <input
            id={id}
            className={styles.input}
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            readOnly={readOnly}
            aria-label={label}
          />
        </div>

        <div className={styles.rightContent}>
          {rightAddon ? (
            <div className={styles.rightAddon}>{rightAddon}</div>
          ) : (
            <svg className={styles.chev} width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 6.5L7.5 11L12 6.5" stroke="rgba(28,46,69,0.6)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
