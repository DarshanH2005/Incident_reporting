import React from 'react';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import ApplyHeading from './ApplyHeading';
import EmployeeNameInput from './EmployeeNameInput';
import EmployeeDetailsCard from './EmployeeDetailsCard';

const VisaForm = () => {
  return (
    <div className="visa-form">
      <ApplyHeading />
      <div className="employee-name-section">
        <div className="form-field-header">
          <label className="field-label">Employee Name</label>
          <div className="note-icon-container">
            <img src="/src/assets/note-icon.svg" alt="Note" className="note-icon" />
          </div>
        </div>
        <div className="input-field-container">
          <img src="/src/assets/search-icon.svg" alt="Search" className="search-icon-left" />
          <input 
            type="text" 
            placeholder="Aadit Pratik Maniar(22528135)"
            className="employee-name-field"
          />
          <img src="/src/assets/close-icon.svg" alt="Clear" className="clear-icon-right" />
          <img src="/src/assets/search-icon.svg" alt="Search" className="search-icon-right" />
        </div>
      </div>
      
      <EmployeeDetailsCard 
        employeeData={{
          name: "Somashree Nandy",
          id: "21519326",
          designation: "Outsourcing", 
          division: "Information System & AI Tools",
          dateOfJoining: "12/3/2025",
          manager: "Ravindra S R"
        }}
      />
    </div>
  );
};

export default VisaForm;
