import React from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';
import Avatars from '../../components/layout/Avatars/Avatars';
import RequiredInfo from '../../components/sections/RequiredInfo/RequiredInfo';
import ViolationHistory from '../../components/cards/ViolationHistory/ViolationHistory';
import OptionalApprovers from '../../components/ui/OptionalApprovers/OptionalApprovers';

const IncidentReportClosed = () => {
  return (
    <div className="incident-report-page">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <Avatars />
       
      </div>
    </div>
  );
};

export default IncidentReportClosed;
