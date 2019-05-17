import React, { Component } from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import Items from './components/Items';
import Container from './components/Container';


class App extends Component {
  render() {
    return (
        <div className="App">
        <Container />        
        </div>
    );
  }
}

export default App;
