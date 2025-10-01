import React, { useState } from 'react';
import styles from './CommentBox.module.css';

const CommentBox = ({ value: initialValue = '', onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.label} id="comment-label">Comment (Max 500 Chars)</div>

      <div className={styles.inputFrame} role="region" aria-labelledby="comment-label">
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

export default CommentBox;
