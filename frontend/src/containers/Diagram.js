import React, { Fragment, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'
import { useSelector } from 'react-redux'

const style = {
  width: '100%',
  height: '800px',
};

const Diagram = (props) => {

    const svgRef = useRef()

    const confirmedCases = []
    const countries = useSelector(state => state.countryByConfirmed);
    countries.map(country => confirmedCases.push(country.confirmed))

    const [data, setData] = useState(confirmedCases)

    useEffect(() => {
      const svg = d3.select(svgRef.current)
      svg.selectAll('circle')
        .data(data)
        .join('circle')
          .attr('r', value => value)
          .attr('cx', value => value)
          .attr('cy', value => value)
          .attr('stroke', 'red')
    }, [data])


      return (
        <Fragment>
            <svg style={style} ref={svgRef}/>
            <button onClick={() => setData(data.map(value => value + 10 ))}>click me</button>
        </Fragment>
  )
}



export default Diagram