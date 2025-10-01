import React from 'react';
import './EmployeeDetailsCard.css';
import ViolationHistory from '../ViolationHistory/ViolationHistory';

const EmployeeDetailsCard = ({ 
  employeeData = {
    name: "Somashree Nandy",
    id: "21519326", 
    designation: "Outsourcing",
    division: "Information System & AI Tools",
    dateOfJoining: "12/3/2025",
    manager: "Ravindra S R"
  }
}) => {
  return (
    <>
    <div className="employee-details-section">
      <h3 className="employee-details-title">Employee Details</h3>
      
      <div className="employee-details-container">
        <div className="employee-detail-field field-employee-name">
          <div className="field-label">Employee Name</div>
          <div className="field-value">{employeeData.name}</div>
        </div>
        
        <div className="field-separator"></div>
        
        <div className="employee-detail-field field-employee-id">
          <div className="field-label">Employee ID</div>
          <div className="field-value">{employeeData.id}</div>
        </div>
        
        <div className="field-separator"></div>
        
        <div className="employee-detail-field field-designation">
          <div className="field-label">Designation</div>
          <div className="field-value">{employeeData.designation}</div>
        </div>
        
        <div className="field-separator"></div>
        
        <div className="employee-detail-field field-division">
          <div className="field-label">Division</div>
          <div className="field-value">{employeeData.division}</div>
        </div>
        
        <div className="field-separator"></div>
        
        <div className="employee-detail-field field-date">
          <div className="field-label">Date of Joining</div>
          <div className="field-value">{employeeData.dateOfJoining}</div>
        </div>
        
        <div className="field-separator"></div>
        
        <div className="employee-detail-field field-manager">
          <div className="field-label">Manager</div>
          <div className="field-value">{employeeData.manager}</div>
        </div>
      </div>
    </div>

      {/* Violation history placed below the employee details */}
      <ViolationHistory />
    </>
  );
};

export default EmployeeDetailsCard;