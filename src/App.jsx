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
import AddTeacher from './Pages/Teacher/AddTeacher'
import PrivateRoute from './Components/utils/PrivateRoute' 
import AddClass from './Pages/Teacher/AddClass'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoosePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard"element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/add-student" element={<PrivateRoute><AddStudent /></PrivateRoute>} />
        <Route path="/home-work" element={<PrivateRoute><HomeWork /></PrivateRoute>} />
        <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
        <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
        <Route path="/notice" element={<PrivateRoute><Notice /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/add-teacher" element={<PrivateRoute><AddTeacher /></PrivateRoute>} />
        <Route path="/add-class" element={<PrivateRoute><AddClass /></PrivateRoute>} />


      </Routes>
    </Router>
  )
}

export default App
