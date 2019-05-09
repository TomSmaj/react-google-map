import React, { Component } from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap';
import Items from './components/Items';
import items from './data/items';

class App extends Component {
  render() {
    return (
        <div className="App">
          <GoogleMap markers={items}/>
          <Items info={items} />
        </div>
    );
  }
}

export default App;
