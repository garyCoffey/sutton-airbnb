import React, { Component } from 'react';
import './App.css';

import NavBar from './components/Navbar/Nabar'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'

class App extends Component {
  state = {
    currentImageIndex: 0,
    items: [
      { "url": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p526x296/46315039_1899849266734877_6023939722835918848_n.jpg?_nc_cat=106&_nc_ht=scontent-ort2-1.xx&oh=6f02fabdfc9b897aed519cd50fa05a7e&oe=5C9FE561" },
      { "url": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/45335641_1885295214856949_9009363578955759616_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=336ee069b9cc1b2efff5f3b172b54886&oe=5CA4CC6B" },
      { "url": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p526x296/42239363_1827976663922138_6390963206768033792_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=d6434a8ef53a1287246c1e155b55f3bd&oe=5CB14392" },
      { "url": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18835752_1336689279717548_3843221791287309415_n.jpg?_nc_cat=105&_nc_ht=scontent-ort2-1.xx&oh=fce6c9d03c098e9db8e401eb5f5ed169&oe=5CA8BA8D" },
      { "url": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p526x296/19554647_1372433012809841_4985720998878312737_n.jpg?_nc_cat=103&_nc_ht=scontent-ort2-1.xx&oh=71c044d19c576af687feac6ee784ce61&oe=5C6942AB" },

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
