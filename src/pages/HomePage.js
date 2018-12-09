import React, { Component } from 'react';

class HomePage extends Component {

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
        <h1>Sutton Family Cottage</h1>
        <button hidden={this.props.currentImageIndex === 0} onClick={this.handleClick}>Previous</button>
        <img className='images' src={this.props.pictures[this.props.currentImageIndex]["url"]} alt="unsplash"></img>
        <button hidden={this.props.currentImageIndex === this.props.pictures.length - 1} onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default HomePage;