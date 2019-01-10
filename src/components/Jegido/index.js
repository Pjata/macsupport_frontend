import React, { Component } from "react"
import BarCharts from "./BarCharts"
import Controls, { playerNames } from "./Controls"

class App extends Component {
  componentDidMount() {
    document.title = "MAC Újbuda jégidő"
  }
  state = {
    names: playerNames
  }
  selectNames = names => {
    this.setState({
      names
    })
  }
  render() {
    const { names } = this.state
    return (
      <div
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <div
          style={{
            height: "50px"
          }}
        >
          <Controls selectNames={this.selectNames} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "85%"
          }}
        >
          <div
            style={{
              height: "100%",
              width: "90%",
              backgroundColor: "#030722",
              color: "white"
            }}
          >
            <BarCharts names={names} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
