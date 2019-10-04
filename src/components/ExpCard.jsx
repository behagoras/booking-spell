import React from 'react';
import '../assets/styles/components/ExpCard.scss';

const ExpCard = () => (
  <section className='ExpCard'>
    <div className='hero'>
      <nav className='hero__navigation'>
        <button type='button' className='hero__share'>hero__share</button>
        <button type='button' className='hero__like'>hero__like</button>
      </nav>
      <h1 className='hero__title1'>hero__title1</h1>
    </div>
    <div className='basic-card'>
      <span className='basic-card__duration'>Viaje de 6 días</span>
      <h2 className='basic-card__title'>Safari de comida consciente en los Galápagos</h2>
      <p className='location'>Puerto Ayora, Ecuador</p>
      <ul className='basic-card__tags'>
        <li className='basic-card__tag'>Aventuras</li>
        <li className='basic-card__tag'>Snorkel</li>
        <li className='basic-card__tag'>Agricultura</li>
        <li className='basic-card__tag'>Causas Sociales</li>
        <li className='basic-card__tag'>Caminata</li>
      </ul>
      <button type='button' className='basic-card__cta'>Causas Sociales</button>
      <summary className='basic-card__short-description'>Island hop around Galapagos for wild, upclose encounters and local food.</summary>
      <div className='features'>
        <div className='feature'>
          <div className='feature__label'>Duración</div>
          <div className='feature__value'>6 días</div>
        </div>
        <div className='feature'>
          <div className='feature__label'>Nivel de actividad</div>
          <div className='feature__value'>ligera</div>
        </div>
        <div className='feature'>
          <div className='feature__label'>Tu anfitrión te recibe</div>
          <div className='feature__value'>En ingles, en español, en francés</div>
        </div>
        <div className='feature'>
          <div className='feature__label'>Incluye</div>
          <div className='feature__value'>Equiipo, transporte, Bebidas, Alojamiento, Comida</div>
        </div>
      </div>
    </div>
  </section>
);

export default ExpCard;
