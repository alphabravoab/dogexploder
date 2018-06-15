import React, { Component } from 'react';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>  <Route exact path="/" component={DogsListContainer} /> </main>
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />

      </div>
    );
  }
}

export default App;
