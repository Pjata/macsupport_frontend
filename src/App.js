import React, { Component } from "react"
import "./App.css"
import LandingPage from "./components/LadingPage/LandingPage"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Callback from "./auth/Callback"
import Refering from "./components/Refering"
import Refered from "./components/Refered"
import Jegido from "./components/Jegido"
class App extends Component {
  style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
  render() {
    console.log(this.props)
    return (
      <Router>
        <div
          style={{
            height: "100%",
            width: "100%"
          }}
        >
          <div style={this.style}>
            <Switch>
              <Route exact path={"/jegido"} component={Jegido} />
              <Route exact path={"/callback"} component={Callback} />
              <Route exact path={"/refering"} component={Refering} />
              <Route exact path={"/:referer"} component={Refered} />
              <Route exact path={"/"} component={LandingPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
