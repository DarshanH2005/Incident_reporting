import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EmployeeNameInput.css';
import NoteIcon from '../../../assets/note-icon.svg';
import CloseIcon from '../../../assets/close-icon.svg';
import SearchIcon from '../../../assets/search-icon.svg';

const EmployeeNameInput = ({ 
  value = "", 
  placeholder = "Enter employee name",
  onValueChange,
  showNote = true,
  disabled = false 
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const handleClearInput = () => {
    setInputValue("");
    if (onValueChange) {
      onValueChange("");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const location = useLocation();
  const isRoute1 = /^\/1(?:$|\/)/.test(location.pathname || '');
  
  console.log('EmployeeNameInput - Current path:', location.pathname, 'isRoute1:', isRoute1);

  return (
    <div className="employee-name-container">
      <div className="employee-name-header">
        <label className="employee-name-label">Employee Name</label>
        {showNote && (
          <div className="note-section">
            <img src={NoteIcon} alt="Note" className="note-icon" />
          </div>
        )}
      </div>
      
      <div className="employee-input-wrapper">
        <div 
          className={`employee-input-container ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''} ${isRoute1 ? 'route1' : 'route-other'}`}
          data-route={isRoute1 ? 'route1' : 'other'}
        >
          <div className="eni-input-field-container">
            <input
              type="text"
              value={inputValue}
              placeholder={placeholder}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              className="employee-name-field"
              spellCheck={false}
              data-ms-editor="true"
            />
            {inputValue && (
              <button className="clear-button" onClick={handleClearInput} type="button">
                <img src={CloseIcon} alt="Clear" className="clear-icon-right" />
              </button>
            )}
            <img src={SearchIcon} alt="Search" className="search-icon-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeNameInput;