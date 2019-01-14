import React, { Component } from "react"
import "./App.css"
import LandingPage from "./components/LadingPage/LandingPage"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Jegido from "./components/Jegido"
import Lovesek from "./components/Lovesek"
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
              <Route exact path={"/lovesek"} component={Lovesek} />
              <Route exact path={"/"} component={LandingPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
