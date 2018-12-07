import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar/Nabar'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'

class App extends Component {
  state = {
    currentImageIndex: 0,
    items: [
      { "url": "https://unsplash.it/400" },
      { "url": "https://unsplash.it/401" },
      { "url": "https://unsplash.it/402" },
      { "url": "https://unsplash.it/403" },
      { "url": "https://unsplash.it/404" },
      { "url": "https://unsplash.it/405" },
      { "url": "https://unsplash.it/406" },
      { "url": "https://unsplash.it/407" },
      { "url": "https://unsplash.it/408" }
    ]
  }
  handleNextClick = () => {
    this.setState({ currentImageIndex: this.state.currentImageIndex + 1 })
  }
  handlePreviousClick = () => {
    this.setState({ currentImageIndex: this.state.currentImageIndex - 1 })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <ImageCarousel handleNextClick={this.handleNextClick} handlePreviousClick={this.handlePreviousClick} currentImageIndex={this.state.currentImageIndex} items={this.state.items} />
      </div>
    );
  }
}
export default App;
