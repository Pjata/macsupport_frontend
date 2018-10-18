import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import "moment/locale/hu"
import MatchCard from "./MatchCard"

class LandingPageComponent extends PureComponent {
  render() {
    const { nextMatch, activeStep, onBack, onNext } = this.props

    const macTag = nextMatch && nextMatch.summary.split(",")[0]
    let date = ""
    let day = ""
    if (nextMatch) {
      moment.locale("hu")
      date = moment(nextMatch.start.dateTime)
      day =
        date
          .format("dddd")
          .charAt(0)
          .toUpperCase() + date.format("dddd").slice(1)
    }
    return (
      <div>
        {nextMatch && (
          <React.Fragment>
            <MatchCard
              activeStep={activeStep}
              matchTag={macTag}
              date={date.format("YYYY.MM.DD HH:mm")}
              day={day}
              onBack={onBack}
              onNext={onNext}
            />
          </React.Fragment>
        )}
      </div>
    )
  }
}

LandingPageComponent.propTypes = {}

export default LandingPageComponent
