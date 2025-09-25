import React, { useState, useEffect } from 'react';
import styles from './IncidentDescription.module.css';

/**
 * IncidentDescription
 * - Label: "Incident Description"
 * - Input Frame: white box with subtle border and rounded corners
 * - Placeholder text: "xxx-xx-xxx-xx-xxx"
 *
 * Props:
 * - value?: string
 * - onChange?: (value: string) => void
 */
export default function IncidentDescription({ value = '', onChange = () => {} }) {
  const [text, setText] = useState(value || '');

  useEffect(() => {
    setText(value || '');
  }, [value]);

  function handleChange(e) {
    setText(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.label} id="incident-description-label">Incident Description</div>

      <div className={styles.inputFrame} role="region" aria-labelledby="incident-description-label">
        <textarea
          className={styles.textarea}
          placeholder="xxx-xx-xxx-xx-xxx"
          value={text}
          onChange={handleChange}
          aria-label="Incident Description"
          rows={3}
        />

        {/* left / right content frames are part of the spec but invisible by default */}
        <div className={styles.leftContent} aria-hidden="true" />
        <div className={styles.rightContent} aria-hidden="true" />
      </div>
    </div>
  );
}
