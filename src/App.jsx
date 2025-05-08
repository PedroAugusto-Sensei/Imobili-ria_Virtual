import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/Home';
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
