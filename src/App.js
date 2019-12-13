import React, { Component } from 'react';
import Testcomp from './component/Testcomp';
import Navbar from './component/layout/Navbar';
import './App.css'


class App extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <Testcomp />
        <h1>good evening</h1>
      </div>
    );
  }
}


export default App;
