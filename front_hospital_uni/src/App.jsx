import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorScreen from './Components/doctores'
import MedicamentoScreen from './Components/medicamentos'
import Sidebar from './Components/sidebar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className='Content'>
          <Routes>
            <Route path="/doctores" element={<DoctorScreen />} />
            <Route path="/medicamentos" element={<MedicamentoScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
