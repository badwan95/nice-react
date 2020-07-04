import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';

class Body extends React.Component{


  render(){
    return(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Body/>,root);