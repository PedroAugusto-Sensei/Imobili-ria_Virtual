import './Welcome.css';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <header>
        <h1>Imobiliaria Virtual</h1>
      </header>
      
      <main className="main-content">
        <h1>Bem vindos a Imobiliaria 2F</h1>
        <p>Encontre seus sonhos aqui</p>
        
        <div className="cta-buttons">
          <Link to="/register" className="register-button">Sign Up</Link>
        </div>
        <div className="cta-buttons">
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </main>
    </>
  );
}

export default Welcome;