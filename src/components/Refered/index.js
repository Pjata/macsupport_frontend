import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import ReferingComponent from "./ReferingComponent"
import superagent from "superagent"
import auth0 from "../../auth/Auth"
import shorthash from "shorthash"
import ConfirmDialog from "./ConfirmDialog"

const url = "http://localhost:8080/api/v1"
class Refered extends PureComponent {
  state = {
    loaded: false,
    isExists: false,
    refererValue: "",
    dialogOpen: false
  }
  componentDidMount() {
    const {
      match: { url }
    } = this.props
    const user_id = auth0.getUserId()
    if (!user_id) {
      localStorage.setItem("redirect_url", url)
      auth0.signIn()
    } else {
      this.setState({
        loaded: true,
        dialogOpen: true,
        referee: this.props.match.params.referer
      })
    }
  }

  onRefererChange = ev => {
    this.setState({
      refererValue: ev.target.value
    })
  }
  handleSubmit = referee => {
    const user_id = auth0.getUserId()
    superagent
      .post(`${url}/refered`)
      .send({
        user_id,
        referee
      })
      .then(result => {
        this.setState({
          isExists: true,
          refererValue: result.body.name
        })
      })
  }
  render() {
    const { refererValue, loaded, isExists, dialogOpen, referee } = this.state
    return (
      <div>
        <ConfirmDialog
          open={dialogOpen}
          referee={referee}
          onSubmit={this.handleSubmit}
        />
        <ReferingComponent
          loaded={loaded}
          isExists={isExists}
          refererValue={refererValue}
          onRefererChange={this.onRefererChange}
          onSubmit={null}
        />
      </div>
    )
  }
}

Refered.propTypes = {}

export default Refered
