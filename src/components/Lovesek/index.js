import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import data from "./shots"
import Tooltip from "rc-tooltip"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { playerNames } from "../Jegido/Controls"
import "rc-tooltip/assets/bootstrap_white.css"
import Select from "react-select"
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Handle = Slider.Handle

const options = playerNames.map(item => ({ value: item, label: item }))

const handle = props => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${data[value].opponent} ${data[value].date}`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

const styleSpan = ({ top, left }) => ({
  background:
    "url(https://www.hockeyslovakia.sk/Content/assets/img/dot2.png) no-repeat",
  position: "absolute",
  width: "8px",
  height: " 7px",
  top,
  left
})
class Lovesek extends PureComponent {
  state = {
    index: 0,
    names: []
  }
  sliderChange = value => {
    this.setState({
      index: value
    })
  }
  onNameChange = values => {
    this.setState({
      names: values
    })
  }
  render() {
    const { index, names } = this.state
    const shoots = data[index].shots
      .filter(shot => {
        if (names.length === 0) {
          return true
        } else {
          return names.map(item => item.value).includes(shot.name)
        }
      })
      .map(shot => (
        <Tooltip
          overlay={<span>{shot.name}</span>}
          trigger={["hover", "click"]}
        >
          <span style={styleSpan(shot)} />
        </Tooltip>
      ))
    return (
      <div
        style={{
          height: "70%",
          width: "70%"
        }}
      >
        <div>
          <Select
            options={options}
            isMulti
            value={names}
            placeholder={"Játékos szűrő"}
            onChange={this.onNameChange}
          />
        </div>
        <div style={{ color: "white", textAlign: "center", margin: "15px" }}>
          {`${data[index].opponent} ${data[index].date}`}
        </div>
        <Slider
          onChange={this.sliderChange}
          min={0}
          max={data.length - 1}
          defaultValue={0}
          handle={handle}
        />
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div style={{ position: "relative", width: "50%" }}>
            {shoots}
            <img
              style={{
                width: "100%",
                height: "100%"
              }}
              src={"https://www.hockeyslovakia.sk/content/assets/img/clear.png"}
            />
          </div>
        </div>
      </div>
    )
  }
}

Lovesek.propTypes = {}

export default Lovesek
