// src/pages/Register.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    // Here you would normally connect to your backend
    console.log('Registration with:', { name, email, password });
    
    // For demo purposes, simulate successful registration and redirect to login
    alert('Registration successful!');
    window.location.href = '/Home';
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Crie sua Conta</h1>
        <p className="subtitle">Junte-se a nossa Imobiliaria</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crie uma senha"
              required
            />
            <small className="password-hint">A senha deve conter no mínimo 6 caracteres</small>
          </div>
          
          <button type="submit" className="register-button">
            Registre
          </button>
        </form>
        
        <div className="login-link">
          Já possui uma conta? <Link to="/login">Login aqui</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;