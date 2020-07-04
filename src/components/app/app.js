import React from 'react';
import {Route} from 'react-router-dom';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Homepage from '../homepage/homepage';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      count:0,
      results:[],
      homepage: false,
      history: false,
    };
  }


  render(){
    return(
      <React.Fragment>
        <Header/>

        <main>

          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/history" exact>
            <h2>This is the history page</h2>
          </Route>

        </main>

        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;