import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import LeaveReportPage from './components/IncidentReportPage'
import './index.css'
import IncidentReportPage from './components/IncidentReportPage'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<IncidentReportPage />} />
        </Routes>
      </Router>
    </div>
  )
}
