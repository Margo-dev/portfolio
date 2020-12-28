import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container d-flex justify-content-between">
        <ul className='footer_menu left'>
          <li className='footer_menu'><i className="fas fa-mobile-alt"></i>+38 (099) 506 32 93 <p>Call me at a convenient time for you !!!</p></li>
          <li className='footer_menu'><i className="far fa-envelope"></i> margaritagrincuk0@gmail.com</li>
        </ul>
        <ul className='footer_menu right d-flex'>
          <li className='footer_menu'><a href="#"><i className="fab fa-facebook-square"></i></a></li>
          <li className='footer_menu'><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>

      </div>
    </footer>
  );
}

export default Footer;
