import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChoosePage from './Pages/ChoosePage/ChoosePage'
import LoginPage from './Pages/LoginPages/LoginPage'
import Dashboard from './Pages/Teacher/Dashboard'
import AddStudent from './Pages/Teacher/AddStudent'
import HomeWork from './Pages/Teacher/HomeWork'
import Attendance from './Pages/Teacher/Attendance'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoosePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/home-work" element={<HomeWork />} />
        <Route path="/attendance" element={<Attendance />} />


      </Routes>
    </Router>
  )
}

export default App
