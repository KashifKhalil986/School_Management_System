import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChoosePage from './Pages/ChoosePage/ChoosePage'
import LoginPage from './Pages/LoginPages/LoginPage'
import Dashboard from './Pages/Teacher/Dashboard'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoosePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
    </Router>
  )
}

export default App
