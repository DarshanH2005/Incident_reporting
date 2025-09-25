import React, { useState, useEffect } from 'react';
import styles from './IncidentCategory.module.css';
import categoryBadge from '../assets/category-badge.svg';

export default function IncidentCategory({ value = 'Category A', onChange = () => {}, onBadgeClick }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => setSelected(value), [value]);

  function handleSelect(val) {
    setSelected(val);
    onChange(val);
  }

  const options = ['Category A', 'Category B', 'Category C', 'Category D'];

  return (
    <div className={styles.container} role="group" aria-label="Incident Category">
      <div className={styles.label}>Incident Category</div>
      <div className={styles.options}>
        {options.map((opt) => (
          <label key={opt} className={styles.radioLabel}>
            <input
              type="radio"
              name="incidentCategory"
              value={opt}
              checked={selected === opt}
              onChange={() => handleSelect(opt)}
              className={styles.radioInput}
            />
            <span className={`${styles.optionLabel} ${selected === opt ? styles.blue : ''}`}>{opt}</span>
            {opt === 'Category D' && (
              <button
                type="button"
                className={styles.badgeButton}
                onClick={(e) => {
                  // prevent label click/radio toggle
                  e.stopPropagation();
                  e.preventDefault();
                  onBadgeClick?.(opt);
                }}
                aria-label={`${opt} badge`}
              >
                <img src={categoryBadge} alt="" className={styles.badge} focusable="false" aria-hidden="true" />
              </button>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
