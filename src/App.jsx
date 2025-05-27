import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChoosePage from './Pages/ChoosePage/ChoosePage'
import LoginPage from './Pages/LoginPages/LoginPage'
import Dashboard from './Pages/Teacher/Dashboard'
import AddStudent from './Pages/Teacher/AddStudent'
import HomeWork from './Pages/Teacher/HomeWork'
import Attendance from './Pages/Teacher/Attendance'
import Result from './Pages/Teacher/Result'
import Notice from './Pages/Teacher/Notice'
import Profile from './Pages/Teacher/Profile'


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
        <Route path="/result" element={<Result />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </Router>
  )
}

export default App
