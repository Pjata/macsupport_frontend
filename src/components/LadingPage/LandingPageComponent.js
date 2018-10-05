import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import MatchCard from "./MatchCard"

class LandingPageComponent extends PureComponent {
  render() {
    const { nextMatch } = this.props

    const macTag = nextMatch && nextMatch.summary.split(",")[0]
    let date = ""
    if (nextMatch) {
      date = moment(nextMatch.start.dateTime)
    }
    return (
      <div>
        {nextMatch && (
          <React.Fragment>
            <MatchCard
              matchTag={macTag}
              date={date.format("YYYY.MM.DD HH:mm")}
            />
          </React.Fragment>
        )}
      </div>
    )
  }
}

LandingPageComponent.propTypes = {}

export default LandingPageComponent
