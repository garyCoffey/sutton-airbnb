import React, { Component } from 'react';


class ImageCarousel extends Component {

  handleClick = (e) => {
    let direction = e.target.innerText
    if (direction === "Next") {
      this.props.handleNextClick()
    } else {
      this.props.handlePreviousClick()
    }
  }
  render() {
    return (
      <div>
        <h1>Carousel Component</h1>
        <button hidden={this.props.currentImageIndex === 0} onClick={this.handleClick}>Previous</button>
        <img src={this.props.items[this.props.currentImageIndex]["url"]} alt="unsplash" />
        <button hidden={this.props.currentImageIndex === this.props.items.length - 1} onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}


export default ImageCarousel;


