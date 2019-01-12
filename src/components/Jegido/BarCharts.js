import React from "react"
import {
  Bar,
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Symbols,
  Surface
} from "recharts"
import { MobileView, BrowserView } from "react-device-detect"

import data2 from "./data"
/*const playerNames = ["DUDÁS, Jesse Ray","BURT, Cameron","MACAULAY, Scott","BODÓ, Chris","LANGKOW, Chris","BROWN, Jared","ORBAN, Brance","POZSGAI, Tamás","KLEMPA, Tomáš","NAGY, Krisztián","DANSEREAU, Keegan","TERBÓCS, István","VOKLA, Roland","GARÁT, Zsombor","ODNOGA, Mátyás","SZABAD, Kevin","SZIGETI, Ákos","KREISZ, Brúnó","FEJES, Nándor","PÁPA, Márton","BUGÁR, Gábor","BUKOR, Raymond","MAJOROSS, Barnabás","RAJNA, Miklós","BÁLIZS, Bence","NEGRIN, John","KEDVES, Richárd","CSOLLÁK, Márkó"]*/
/*const playerNames = ["VOKLA, Roland","GARÁT, Zsombor","ODNOGA, Mátyás","SZABAD, Kevin","SZIGETI, Ákos","KREISZ, Brúnó","FEJES, Nándor","PÁPA, Márton","BUGÁR, Gábor","BUKOR, Raymond","MAJOROSS, Barnabás"]*/
function generateHslaColors(saturation, lightness, alpha, amount) {
  let colors = []
  let huedelta = Math.trunc(360 / amount)

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
  }

  return colors
}

const colorsPretty = [
  "#e6194b",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#bcf60c",
  "#fabebe",
  "#008080",
  "#e6beff",
  "#9a6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#808080",
  "#000000"
]
const colors = [
  "#00FF00",
  "#0000FF",
  "#FF00FF",
  "#00FFFF",
  "#FFFF00",
  "#70DB93",
  "#B5A642",
  "#5F9F9F",
  "#B87333",
  "#2F4F2F",
  "#9932CD",
  "#871F78",
  "#855E42",
  "#545454",
  "#8E2323",
  "#F5CCB0",
  "#238E23",
  "#CD7F32",
  "#DBDB70",
  "#C0C0C0",
  "#527F76",
  "#9F9F5F",
  "#8E236B",
  "#2F2F4F",
  "#EBC79E",
  "#CFB53B",
  "#FF7F00",
  "#DB70DB",
  "#D9D9F3",
  "#5959AB",
  "#8C1717",
  "#238E68",
  "#6B4226",
  "#8E6B23",
  "#007FFF",
  "#00FF7F",
  "#236B8E",
  "#38B0DE",
  "#DB9370",
  "#ADEAEA",
  "#5C4033",
  "#4F2F4F",
  "#CC3299",
  "#99CC32"
]
const SIZE = 32
//const colors =['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080',  '#000000']
const getCharts = names => {
  return names.map((name, index) => (
    <Bar
      stackId={"a"}
      key={name}
      name={name}
      dataKey={name}
      isAnimationActive={false}
      fill={colorsPretty[index % 20]}
    />
  ))
}
const viewBox = { x: 0, y: 0, width: SIZE, height: SIZE }
const svgStyle = {
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: 4
}

const getLegend = names => {
  const nameElems = names.map((name, index) => (
    <div key={index}>
      <Surface width={14} height={14} viewBox={viewBox} style={svgStyle}>
        <Symbols
          fill={colorsPretty[index % 20]}
          cx={16}
          cy={16}
          size={SIZE}
          type={"square"}
          sizeType="diameter"
        />
      </Surface>
      {name}
    </div>
  ))
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))"
      }}
    >
      {nameElems}
    </div>
  )
}

const SimpleLineChart = props => {
  const lines = getCharts(props.names)
  return (
    <div
      style={{
        height: "100%",
        width: " 100%"
      }}
    >
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          data={data2}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={value => {
              const hours = Math.floor(value / (60.0 * 60.0))
              const minutes = Math.floor((value - hours * 60 * 60) / 60.0)
              const seconds = value % 60
              const minutesString = minutes < 10 ? `0${minutes}` : minutes
              const secondsString = seconds < 10 ? `0${seconds}` : seconds
              return `${hours}:${minutesString}:${secondsString}`
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            isAnimationActive={false}
            contentStyle={{
              backgroundColor: "#030722",
              color: "white"
            }}
            formatter={(value, name, props) => {
              const hours = Math.floor(value / (60.0 * 60.0))
              const minutes = Math.floor((value - hours * 60 * 60) / 60.0)
              const seconds = value % 60
              const minutesString = minutes < 10 ? `0${minutes}` : minutes
              const secondsString = seconds < 10 ? `0${seconds}` : seconds
              return `${hours}:${minutesString}:${secondsString}`
            }}
          />
          {lines}
        </BarChart>
      </ResponsiveContainer>
      <div>{getLegend(props.names)}</div>
    </div>
  )
}

export default SimpleLineChart
