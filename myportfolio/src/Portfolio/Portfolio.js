import React from 'react';
import '../Portfolio/Portfolio.css';
import ImgWeather from '../image/weath_pict.png';
import ImgGame from '../image/game_x.png';

function Portfolio() {
  return (
    <>
      <div className="container">
        <h2>Portfolio</h2>
        <p className='work-text'>All projects that I completed during the course are provided here:</p>
        <div className="work-items d-flex">
          <div className="work-item"><a href="/work/weather"><img src={ImgWeather} alt="weather" /></a></div>
          <div className="work-item"><a href="/work/game"><img src={ImgGame} alt="game" /></a></div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
