import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import CV from '../CV/CV';
import Portfolio from '../Portfolio/Portfolio';
import Weather from '../Weather/Weather';
import Game from '../Game/Game';

function App() {
  return (
    <>
      <Header />
      <Router >
        <Switch>
          <Route exact path='/' component={Main}></Route>
          <Route path='/cv' component={CV}></Route>
          <Route exact path='/work' component={Portfolio}></Route>
          <Route exact path='/work/weather' component={Weather}></Route>
          <Route exact path='/work/game' component={Game}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
