import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CareerFair from './pages/career-fair/CareerFair.jsx'
import Sponsor from './pages/sponsor/Sponsor.jsx'
import Membership from './pages/membership/Membership.jsx'
import Home from './pages/landing/Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-fair" element={<CareerFair />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)