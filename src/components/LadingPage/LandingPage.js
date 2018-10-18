import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import LandingPageComponent from "./LandingPageComponent"
import superagent from "superagent"
class LandingPage extends PureComponent {
  state = {
    nextMatch: [],
    selectedIndex: 0
  }
  componentDidMount() {
    superagent
      .get("https://macrest.herokuapp.com/api/v1/nextMatch")
      .then(result => {
        this.setState({
          nextMatch: result.body
        })
      })
  }
  onBack = () => {
    this.setState({
      selectedIndex: Math.max(0, this.state.selectedIndex - 1)
    })
  }
  onNext = () => {
    this.setState({
      selectedIndex: Math.min(2, this.state.selectedIndex + 1)
    })
  }
  render() {
    const { nextMatch, selectedIndex } = this.state
    return (
      <LandingPageComponent
        onBack={this.onBack}
        onNext={this.onNext}
        activeStep={selectedIndex}
        nextMatch={nextMatch[selectedIndex]}
      />
    )
  }
}

LandingPage.propTypes = {}

export default LandingPage
