import './index.css'
import React, { Component } from 'react'

class Speedometer extends Component {
  state = { speed: 0 }

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return { speed: prevState.speed + 10 }
      }
      return null
    })
  }

  brake = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return { speed: prevState.speed - 10 }
      }
      return null
    })
  }

  render() {
    const { speed } = this.state
    return (
      <div className="container">
        <h1 className="headingStyle">SPEEDOMETER</h1>
        <img
          className="imgStyle"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading2Style">Speed is {speed}mph</h1>
        <p className="paraStyle">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonsContainer">
          <button onClick={this.accelerate} className="accelerateButton">Accelerate</button>
          <button onClick={this.brake} className="brakeButton">Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default Speedometer

