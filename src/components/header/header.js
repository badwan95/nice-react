import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

const Header = () => {

  let [home, setHome] = useState(true);
  let [history, setHistory] = useState(false);
  const toggleHomepage = () => {
    setHome(home = true);
    setHistory(history = false);
  };

  const toggleHistory = () => {
    setHome(home = false);
    setHistory(history = true);
  };

  return(
    <header>
      <h1>Resty App!</h1>
      <ul>
        <li>
          <NavLink to="/nice-react/" onClick={toggleHomepage} className={'toggle'+home}>Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/nice-react/history" onClick={toggleHistory} className={'toggle'+history}>History</NavLink>
        </li>
      </ul>
      
    </header>
  );
};

export default Header;