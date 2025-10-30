import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import CareerFair from './pages/CareerFair.jsx'
import Sponsor from './pages/Sponsor.jsx'
import Home from './Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-fair" element={<CareerFair />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)