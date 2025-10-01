import React from 'react';
import '../../../styles/global/formControls.css';
import ApplyHeading from '../ApplyHeading/ApplyHeading';
import EmployeeNameInput from '../../forms/EmployeeNameInput/EmployeeNameInput';
import EmployeeDetailsCard from '../../cards/EmployeeDetailsCard/EmployeeDetailsCard';

const EmployeeInfoSection = () => {
  return (
    <div className="visa-form">
      
      
      <EmployeeNameInput 
        value="Aadit Pratik Maniar(22528135)"
        placeholder="Enter employee name"
        showNote={true}
      />
      
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

export default EmployeeInfoSection;
