import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import image0 from "../../image0.jpg"
import { SocialIcon } from "react-social-icons"
import Point from "@material-ui/icons/PinDrop"

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
function ImgMediaCard(props) {
  const { classes, matchTag, date } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="190"
          image={image0}
        />
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
            style={{ textAlign: "center" }}
          >
            {date}
          </Typography>
          <Typography component="p">
            Szeretettel várunk a MAC Újbuda jégkorong csapat következő hazai
            meccsére a Tüskecsarnokban!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <SocialIcon url={"https://www.facebook.com/MACBudapestfelnott"} />
        </IconButton>
        <IconButton onClick={onMapClick}>
          <Point />
        </IconButton>
      </CardActions>
    </Card>
  )
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ImgMediaCard)
