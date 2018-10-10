import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const style = {
  maxWidth: 445,
  minWidth: 300,
  padding: "10px 10px 10px 10px"
}
class ReferingComponent extends PureComponent {
  render() {
    const {
      refererValue,
      loaded,
      isExists,
      onRefererChange,
      onSubmit
    } = this.props
    return (
      <Paper style={style}>
        <TextField
          fullWidth
          value={refererValue}
          onChange={onRefererChange}
          label={"Hivatkozó név"}
        />
        {!isExists && (
          <Button
            variant={"contained"}
            style={{ width: "100%", marginTop: "15px" }}
            disabled={!loaded}
            onClick={onSubmit}
          >
            Mentés
          </Button>
        )}
      </Paper>
    )
  }
}

ReferingComponent.propTypes = {}

export default ReferingComponent
