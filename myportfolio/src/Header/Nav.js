import React from 'react';
import './Nav.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="siteNav">
      <div className="container">
        <nav className="d-flex justify-content-between">
          <div className="logo"><span>&lt;</span>MG<span>&frasl;&gt;</span></div>
          <ul className='menu d-flex'>
            <li className='menu_item'><a href="/">Main</a></li>
            <li className='menu_item'><a href="/cv">CV</a></li>
            <li className='menu_item'><a href="/work">Portfolio</a></li>
          </ul>
        </nav>
      </div >
    </div>
  );
}

export default Nav;
