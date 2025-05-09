// src/pages/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const listaRegistrados = JSON.parse(localStorage.getItem('listaRegistrados')) || '[]';

    // Tenta encontrar o usuário registrado
    let encontrado;
    for (let i = 0; i < listaRegistrados.length; i++) {
      const user = listaRegistrados[i];
      if (user.email === email && user.password === password) {
        encontrado = user;
        break;  // para no primeiro match
      }
    }

    // Verificando se a conta existe
    if (encontrado) {
      window.location.href = '/Home';
    } else {
      setError('Email ou senha incorretos. Ou conta inexistente.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <p className="welcome-text">Bem vindo de volta!</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
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
              placeholder="Ensira sua senha"
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        <div className="register-link">
          Não possui uma conta? <Link to="/register">Cadastre-se aqui</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;