import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"

const playerNamesYoungForwards = [
  "ODNOGA, Mátyás",
  "SZABAD, Kevin",
  "SZIGETI, Ákos",
  "KREISZ, Brúnó",
  "PÁPA, Márton",
  "MAJOROSS, Barnabás"
]
const playerNamesYoungDefenders = [
  "VOKLA, Roland",
  "GARÁT, Zsombor",
  "FEJES, Nándor",
  "BUGÁR, Gábor",
  "BUKOR, Raymond",
  "CSOLLÁK, Márkó"
]
const playerNamesWingers = [
  "BODÓ, Chris",
  "ORBAN, Brance",
  "KLEMPA, Tomáš",
  "DANSEREAU, Keegan",
  "TERBÓCS, István",
  "ODNOGA, Mátyás",
  "SZABAD, Kevin",
  "SZIGETI, Ákos",
  "PÁPA, Márton",
  "MAJOROSS, Barnabás"
]
export const playerNames = [
  "DUDÁS, Jesse Ray",
  "BURT, Cameron",
  "MACAULAY, Scott",
  "BODÓ, Chris",
  "LANGKOW, Chris",
  "BROWN, Jared",
  "ORBAN, Brance",
  "POZSGAI, Tamás",
  "KLEMPA, Tomáš",
  "NAGY, Krisztián",
  "DANSEREAU, Keegan",
  "TERBÓCS, István",
  "VOKLA, Roland",
  "GARÁT, Zsombor",
  "ODNOGA, Mátyás",
  "SZABAD, Kevin",
  "SZIGETI, Ákos",
  "KREISZ, Brúnó",
  "FEJES, Nándor",
  "PÁPA, Márton",
  "BUGÁR, Gábor",
  "BUKOR, Raymond",
  "MAJOROSS, Barnabás",
  "NEGRIN, John",
  "KEDVES, Richárd",
  "CSOLLÁK, Márkó"
]
const playerNamesDefenders = [
  "DUDÁS, Jesse Ray",
  "BURT, Cameron",
  "MACAULAY, Scott",
  "POZSGAI, Tamás",
  "NEGRIN, John",
  "VOKLA, Roland",
  "GARÁT, Zsombor",
  "FEJES, Nándor",
  "BUGÁR, Gábor",
  "BUKOR, Raymond",
  "CSOLLÁK, Márkó"
]
const playerNamesCenters = [
  "LANGKOW, Chris",
  "BROWN, Jared",
  "NAGY, Krisztián",
  "KREISZ, Brúnó",
  "MAJOROSS, Barnabás"
]
const playerNamesForwards = [
  "BODÓ, Chris",
  "LANGKOW, Chris",
  "ORBAN, Brance",
  "KLEMPA, Tomáš",
  "BROWN, Jared",
  "DANSEREAU, Keegan",
  "TERBÓCS, István",
  "NAGY, Krisztián",
  "ODNOGA, Mátyás",
  "SZABAD, Kevin",
  "SZIGETI, Ákos",
  "MAJOROSS, Barnabás",
  "KREISZ, Brúnó",
  "PÁPA, Márton"
]
class Controls extends PureComponent {
  selectNames = names => ev => {
    const { selectNames } = this.props
    selectNames(names)
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "grid",
            width: "700px",
            gridTemplateColumns: "repeat(auto-fit,minmax(50px,1fr))",
            gridGap: "5px"
          }}
        >
          <AwesomeButton
            type={"facebook"}
            action={this.selectNames(playerNames)}
          >
            Mind
          </AwesomeButton>
          <AwesomeButton
            type={"facebook"}
            action={this.selectNames(playerNamesYoungDefenders)}
          >
            Fiatal védők
          </AwesomeButton>
          <AwesomeButton
            type={"facebook"}
            action={this.selectNames(playerNamesYoungForwards)}
          >
            Fiatal támadók
          </AwesomeButton>
          <AwesomeButton
            type={"facebook"}
            action={this.selectNames(playerNamesWingers)}
          >
            Szélsők
          </AwesomeButton>
          <AwesomeButton
            type={"facebook"}
            action={this.selectNames(playerNamesCenters)}
          >
            Centerek
          </AwesomeButton>
          <AwesomeButton
            type={"facebook"}
            action={this.selectNames(playerNamesDefenders)}
          >
            Védők
          </AwesomeButton>
          <AwesomeButton
            type={"facebook"}
            action={this.selectNames(playerNamesForwards)}
          >
            Támadók
          </AwesomeButton>
        </div>
      </div>
    )
  }
}

Controls.propTypes = {}

export default Controls
