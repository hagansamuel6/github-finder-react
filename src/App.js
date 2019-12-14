import React, { Component } from 'react';
import Testcomp from './component/Testcomp';
import Navbar from './component/layout/Navbar';
import UserItem from './component/user/UserItem'
import Users from './component/user/Users';
import './App.css';


class App extends Component {


  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <div className="container">
        <Users/>
        </div>  
      </React.Fragment>
    );
  }
}


export default App;
