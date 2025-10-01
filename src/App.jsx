import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import './index.css'
import IncidentReportInitiation from './pages/IncidentReport/IncidentReportInitiation'
import IncidentReportAssignment from './pages/IncidentReport/IncidentReportAssignment'
import IncidentReportReview from './pages/IncidentReport/IncidentReportReview'
import IncidentReportApproval from './pages/IncidentReport/IncidentReportApproval'
import IncidentReportClosed from './pages/IncidentReport/IncidentReportClosed'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<IncidentReportInitiation />} />
          <Route path="/2" element={<IncidentReportAssignment />} />
          <Route path="/3" element={<IncidentReportReview />} />
          <Route path="/4" element={<IncidentReportApproval />} />
          <Route path="/5" element={<IncidentReportClosed />} />
        </Routes>
      </Router>
    </div>
  )
}
