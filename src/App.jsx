import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/Home';
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import WelcomePage from './pages/Welcome';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
