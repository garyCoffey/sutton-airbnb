import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './Page404.css';


class Page404 extends Component {
  render() {
    return (
      <div id="page-404">
        <ReactPlayer url='https://www.youtube.com/watch?v=RfiQYRn7fBg' playing />
      </div>
    )
  }
}

export default Page404;