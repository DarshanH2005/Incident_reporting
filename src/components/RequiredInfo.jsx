import React from "react";
import "../styles/RequiredInfo.css";

import ClipboardIcon from '../assets/clipboard-new-24x24.svg';

import VisaFormSection from './VisaFormSection';

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info-rectangle ${className}`}> 
      <div className="required-info-header">
        <span className="required-info-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img className="clipboard-icon" src={ClipboardIcon} width={24} height={24} alt="clipboard" />
          <span style={{ fontSize: '20px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Required Information
            
          </span>
        </span>
      </div>
      <div className="worklet-details-card">
        <div className="form-sections-container">
          <VisaFormSection />
          <br /><br />
          <div style={{ marginTop: 8 }}>
            
          </div>
          <br /><br />
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo;
