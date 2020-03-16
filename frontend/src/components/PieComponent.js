import React, { Fragment, useState } from 'react'
import * as d3 from 'd3'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Path = styled.path`
  fill: ${props => d3.interpolateSinebow(props.colors)};
  cursor: pointer;
  stroke: yellow;
`;


const Arc = ({ arcData }) => {

  const [radius, setRaduis] = useState(300)

  const arc = d3
    .arc()
    .innerRadius(1)
    .outerRadius(radius)

const onHover = (event) => {
  setRaduis(radius + 20)
}

const onLeave = () => {
  setRaduis(radius - 20)
}

const onClick = (event) => {

  
 console.log(event.target.dataset.confirmed)
 console.log(event.target.dataset.country)
}


  return(
    <Fragment>
    <Path
      d={arc(arcData)}
      colors={arcData.data.confirmed / 1000}
      onMouseLeave={onLeave} onMouseEnter={onHover}
      onClick={onClick}
      data-country={arcData.data.country}
      data-confirmed={arcData.data.confirmed}/>
    <text
      transform={`translate(${arc.centroid(arcData)})`}
      dy=".35em"
      textAnchor="middle"
      fill="black"
      >
      {arcData.data.country}
    </text>
    </Fragment>
  )

}

const PieComponent = () => {
  const data = useSelector(state => state.countryByConfirmed)
  let others = {
    country: 'Others',
    confirmed: 0
  }

  let filteredData = []

  data.map(country => {
    if (country.confirmed > 100){
      filteredData.push(country)
    }
    else {
      others.confirmed += country.confirmed
    }
  })

  filteredData.push(others)

  const pie = d3.pie().value(d => d.confirmed)

  return <g transform={`translate(300 , 300)`}>
            {pie(filteredData).map(d => (
              <Arc arcData={d}/>
            ))}
          </g>
}

export default PieComponent