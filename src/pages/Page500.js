import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Page500.css'

class Page500 extends Component {
  render() {
    return (
      <div id="page-500">
        <ReactPlayer url='https://www.youtube.com/watch?v=WWaLxFIVX1s' playing />
      </div>
    );
  }
}

export default Page500;