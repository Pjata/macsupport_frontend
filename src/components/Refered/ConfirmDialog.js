import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"

class AlertDialog extends React.Component {
  state = {
    selectedNo: false
  }
  handleNo = () => {
    this.setState({
      selectedNo: true,
      referee: ""
    })
  }
  handleChange = ev => {
    this.setState({
      referee: ev.target.value
    })
  }
  getTitleContent = () => {
    const { selectedNo } = this.state
    if (selectedNo) {
      return (
        <React.Fragment>
          Adja meg az ön meghívójának azonosítóját!
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          Biztos hogy {this.props.referee} az ön meghívója?
        </React.Fragment>
      )
    }
  }
  getContent = () => {
    const { selectedNo } = this.state
    if (selectedNo) {
      return (
        <React.Fragment>
          <TextField
            label={"Meghívójának azonosítója:"}
            value={this.state.referee}
            onChange={this.handleChange}
          />
        </React.Fragment>
      )
    } else {
      return (
        <DialogContentText id="alert-dialog-description">
          Figyelem az elfogadás után nem kaphat meghívót más személytől!
        </DialogContentText>
      )
    }
  }
  handleYes = () => {
    const { selectedNo } = this.state
    if (selectedNo) {
      this.props.onSubmit(this.props.referee)
    } else {
      this.props.onSubmit(this.state.referee)
    }
  }
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {this.getTitleContent()}
        </DialogTitle>
        <DialogContent>{this.getContent()}</DialogContent>
        <DialogActions>
          <Button onClick={this.handleNo} color="primary">
            Nem
          </Button>
          <Button onClick={this.handleYes} color="primary" autoFocus>
            Igen
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default AlertDialog
