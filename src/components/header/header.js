import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      homepage:true,
      history:false,
    }
  }

  toggleHomepage = () => {
    this.setState({homepage:true,history:false});
  }

  toggleHistory = () => {
    this.setState({homepage:false,history:true});
  }

  render(){
    return(
      <header>
        <h1>Resty App!</h1>
        <ul>
          <li>
            <NavLink to="/" onClick={this.toggleHomepage} className={'toggle'+this.state.homepage}>Homepage</NavLink>
          </li>
          <li>
            <NavLink to="/history" onClick={this.toggleHistory} className={'toggle'+this.state.history}>History</NavLink>
          </li>
        </ul>
      
      </header>
    );
  }
};

export default Header;