import React, { Fragment, useState } from 'react'
import * as d3 from 'd3'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Modal from 'react-modal';

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    textAlign             : 'center'
  }
};

const Path = styled.path`
  fill: ${props => d3.interpolateSinebow(props.colors)};
  cursor: pointer;
  stroke: yellow;
`;

const Arc = ({ arcData }) => {

  const [radius, setRaduis] = useState(350)

  const [modalIsOpen,setIsOpen] = useState(false);

  const arc = d3
    .arc()
    .innerRadius(1)
    .outerRadius(radius)
    .padAngle(.04)
    .padRadius(100)
    .cornerRadius(2);

    const onHover = (event) => {
      setRaduis(radius + 30)
    }

    const onLeave = () => {
      setRaduis(radius - 30)
    }

    const onClick = (event) => {
      setIsOpen(true)
    }

    function closeModal(){
      setIsOpen(false)
    }

    function midAngle(arcData) {
      return arcData.startAngle + (arcData.endAngle - arcData.startAngle) / 2;
  }

  function lablesOut(arcData){
    var pos = arc.centroid(arcData);
    pos[0] = radius * (midAngle(arcData) < Math.PI ? 1 : -1);
    // pos[1] = radius * (midAngle(arcData) < Math.PI ? 1 : -1);
    console.log(pos)
    return pos
  }




  return(
    <Fragment>
    <Path
      d={arc(arcData)}
      colors={arcData.data.confirmed / 1000}
      onMouseLeave={onLeave} onMouseEnter={onHover}
      onClick={onClick}
      />
    <text
      transform={`translate(${arc.centroid(arcData)})`}
      // transform={`translate(${lablesOut(arcData)})`}
      dy=".35em"
      textAnchor='middle'
      fill="black"
      >
      {arcData.data.country}
    </text>
    
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyle}
    >
      <h1>{arcData.data.country}</h1>
      <p>Confirmed cases: {arcData.data.confirmed}</p>
    </Modal>
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
    if (country.confirmed > 150){
      filteredData.push(country)
    }
    else {
      others.confirmed += country.confirmed
    }
  })

  filteredData.push(others)

  const pie = d3.pie().value(d => d.confirmed)

  return <g transform={`translate(400 , 400)`}>
            {pie(filteredData).map(d => (
              <Arc arcData={d}/>
            ))}
          </g>
}

export default PieComponent