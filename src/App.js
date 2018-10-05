import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import LandingPage from "./components/LadingPage/LandingPage"
import BackgroundSlideshow from "react-background-slideshow"
import image0 from "./image0.jpg"
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
class App extends Component {
  style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <div style={this.style}>
          <LandingPage />
        </div>
      </div>
    )
  }
}

export default App
