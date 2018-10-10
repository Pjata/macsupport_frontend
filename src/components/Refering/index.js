import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import ReferingComponent from "./ReferingComponent"
import superagent from "superagent"
import auth0 from "../../auth/Auth"
const url = "http://localhost:8080/api/v1"

class Refering extends PureComponent {
  state = {
    loaded: false,
    isExists: false,
    refererValue: ""
  }
  componentDidMount() {
    const user_id = auth0.getUserId()
    if (!user_id) {
      localStorage.setItem("redirect_url", "/refering")
      auth0.signIn()
    }
    superagent
      .get(`${url}/referer/exists`)
      .query({ user_id })
      .then(({ body: { isExists, data } }) => {
        this.setState({
          loaded: true,
          isExists,
          refererValue: isExists ? data.name : ""
        })
      })
  }

  onRefererChange = ev => {
    this.setState({
      refererValue: ev.target.value
    })
  }
  onSubmit = () => {
    const { refererValue } = this.state
    const userId = auth0.getProfile().sub
    console.log(userId)
    superagent
      .post(`${url}/refering`)
      .send({
        user_id: userId,
        name: refererValue
      })
      .then(result => {
        this.setState({
          isExists: true,
          refererValue: result.body.name
        })
      })
  }
  render() {
    const { refererValue, loaded, isExists } = this.state
    return (
      <ReferingComponent
        loaded={loaded}
        isExists={isExists}
        refererValue={refererValue}
        onRefererChange={this.onRefererChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

Refering.propTypes = {}

export default Refering
