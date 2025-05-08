import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">Virtual Immobiliary</div>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
        </nav>
      </header>
      
      <main className="main-content">
        <h1>Welcome to Virtual Immobiliary</h1>
        <p>Find your dream property with us</p>
        
        <div className="cta-buttons">
          <Link to="/register" className="cta-button secondary">Sign Up</Link>
        </div>
      </main>
    </div>
  );
}

export default Home;