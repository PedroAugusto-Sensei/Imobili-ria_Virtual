// components/Carousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import Logistica from '../assets/images/img1k.jpg';
import Florestal from '../assets/images/img8k.jpg';
import BrasilChile from '../assets/images/img2k.jpg';
import Onpex from '../assets/images/img4k.jpg';
import Bibi from '../assets/images/img11k.jpg'; 
import Atacadista from '../assets/images/img9k.jpg';
import Romar from '../assets/images/img7k.jpeg';


const slides = [
  {
    title: 'Título',
    description: 'Descrição',
    image: Atacadista
  },
  {
    title: 'Título',
    description: 'Descrição',
    image: Florestal
  },
  {
    title: 'Título',
    description: 'Descrição',
    image: Onpex
  },
  {
    title: 'Título',
    description: 'Descrição',
    image: Bibi
  },
  {
    title: 'Título',
    description: 'Descrição',
    image: BrasilChile
  },
  {
    title: 'Título',
    description: 'Descrição',
    image: Logistica
  },
  {
    title: 'Título',
    description: 'Descrição',
    image: Romar
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const startX = useRef(null);

  /* ------------ timer 5s -------------- */
  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  /* ------------ swipe touch ------------ */
  const onTouchStart = e => { startX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    const dist = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dist) > 50) {
      dist > 0
        ? setActive(p => (p - 1 + slides.length) % slides.length)
        : setActive(p => (p + 1) % slides.length);
    }
    startX.current = null;
  };

  return (
    <section
      className="carousel-section"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >

      <br id="Servicos" /><br /><br /><br />
      <h1 className="carousel-title">Imóveis</h1>

      <div className="carousel-container">
        <div className="carousel-slide">
          <div className="carousel-content">
            <div className="carousel-text">
              <h2>{slides[active].title}</h2>
              <p>{slides[active].description}</p>
              <button className="btn-saiba-mais">SAIBA MAIS</button>
            </div>

            <div className="carousel-image">
              <img
                src={slides[active].image}
                alt={slides[active].title}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="carousel-dots" id="Marcas">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}