import React from 'react';
import './homepage.scss';

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: '',
      method: 'GET',
    };
  }

  render(){
    return(
      <React.Fragment>
        <h2>This is the main page!</h2>
        <form>
          <label>URL</label>
          <input placeholder="Enter API URL"/>
          <button type="submit" >Go!</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Homepage;