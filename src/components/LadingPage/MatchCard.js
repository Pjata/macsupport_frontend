import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import image0 from "../../image0.jpg"
import FacebookIcon from "mdi-material-ui/Facebook"
import Instagram from "mdi-material-ui/Instagram"
import MobileStepper from "@material-ui/core/MobileStepper"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import GoogleMaps from "mdi-material-ui/GoogleMaps"
import Home from "@material-ui/icons/Home"
import auth0 from "../../auth/Auth"
const styles = {
  card: {
    maxWidth: 445
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  }
}

const onMapClick = ev => {
  window.open(
    "https://www.google.com/maps/dir/?api=1&destination=t%C3%BCskecsarnok",
    "_blank"
  )
}
const onFbClick = ev => {
  window.open("https://www.facebook.com/MACBudapestfelnott", "_blank")
}
const onInstaClick = ev => {
  window.open("https://www.instagram.com/macujbudafelnott/", "_blank")
}
const onHomeClick = ev => {
  window.open("http://macbudapesthockey.hu/")
}
function ImgMediaCard(props) {
  const { classes, matchTag, date, day, activeStep, onNext, onBack } = props
  console.log(auth0.getProfile())
  return (
    <div className={classes.card}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="headline"
              style={{ textAlign: "center" }}
            >
              {matchTag}
            </Typography>

            <Typography
              gutterBottom
              variant="headline"
              style={{ textAlign: "center", fontWeight: 550 }}
            >
              {date}
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              style={{ textAlign: "center" }}
            >
              {day}
            </Typography>
            <Typography component="p">
              Szeretettel várunk a MAC Újbuda jégkorong csapat következő hazai
              meccsére a Tüskecsarnokban!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={onFbClick}>
            <FacebookIcon nativeColor={"#3B5998"} />
          </IconButton>
          <IconButton onClick={onInstaClick}>
            <Instagram nativeColor={"#bc2a8d"} />
          </IconButton>
          <IconButton onClick={onMapClick}>
            <GoogleMaps nativeColor={"#2BA76C"} />
          </IconButton>
          <IconButton onClick={onHomeClick}>
            <Home nativeColor={"#000422"} />
          </IconButton>
        </CardActions>
      </Card>
      <MobileStepper
        position={"static"}
        activeStep={activeStep}
        backButton={
          <Button disabled={activeStep === 0} onClick={onBack}>
            <KeyboardArrowLeft />
          </Button>
        }
        nextButton={
          <Button disabled={activeStep === 2} onClick={onNext}>
            <KeyboardArrowRight />
          </Button>
        }
        steps={3}
      />
    </div>
  )
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ImgMediaCard)
