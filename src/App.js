import React, { Component } from 'react';
import './App.css';
import FishList from './FishList';
import MockData from './MockData';

class App extends Component {
  render() {
    return (
        <FishList MockData= { MockData }/>
    );
  }
}

export default App;
