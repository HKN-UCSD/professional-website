import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CareerFair from './pages/CareerFair.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Membership from './pages/membership/Membership.jsx'
import Home from './Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-fair" element={<CareerFair />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
