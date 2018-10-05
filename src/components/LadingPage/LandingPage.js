import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import LandingPageComponent from "./LandingPageComponent"
import superagent from "superagent"
class LandingPage extends PureComponent {
  state = {
    nextMatch: null
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
  render() {
    const { nextMatch } = this.state
    return <LandingPageComponent nextMatch={nextMatch} />
  }
}

LandingPage.propTypes = {}

export default LandingPage
