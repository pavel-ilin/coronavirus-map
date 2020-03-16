import React, { Fragment, useRef, useEffect, useState } from 'react';
// import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import * as d3 from "d3";
// import geoData from "../countries.geo.json";

import PieComponent from '../components/PieComponent'


const Diagram = () => {

  return (
    <svg width={800} height={800}>
      <PieComponent />
    </svg>
  );
}

export default Diagram








// const renderPie = (pie, titles) => {
//   let arc = d3
//     .arc()
//     .innerRadius(0)
//     .outerRadius(300)
//
//   let interpolate = d3.interpolateHslLong("red", "blue")
//
//
//   return pie.map((slice, index) => {
//     let sliceColor = interpolate(index / (pie.length - 1));
//     return (<path d={arc(slice)} fill={sliceColor} text={titles[index]}></path>);
//   });
// };
//
//
// const Diagram = (props) => {
//     const countries = useSelector(state => state.countryByConfirmed)
//     let data = []
//     let labels = []
//     let singles = []
//     let titles = []
//
//     countries.map(country => {
//       if (country.confirmed  <= 100){
//         singles.push(country.confirmed)
//         titles.push(country.country)
//       }
//       else{
//         data.push(country.confirmed)
//         titles.push(country.country)
//       }
//     })
//     let sum = singles.reduce(function(a, b){return a + b;}, 0);
//
//     data.push(sum)
//
//     const height = 600;
//     const width = 600;
//
//     let pie = d3.pie()(data);
//
//     // This is cool part
//     const svgRef = useRef()
//
//     useEffect(() => {
//           const svg = d3.select('g')
//             .append("svg:text")
//               .data(countries)
//               .attr("text-anchor", "middle")
//               .text(country => country.country)
//         }, countries)
//
//       return (
//         <Fragment>
//         <h1>World Situation</h1>
//           <svg ref={svgRef} height={height} width={width}>
//             <g transform={`translate(${width / 2},${height / 2})`}>
//               {renderPie(pie, titles)}
//             </g>
//           </svg>
//         </Fragment>
//   )
// }
//
// export default Diagram

// World Map

// const style = {
//   width: '100%',
//   height: '800px',
// };
//
//
// const Diagram = (props) => {
//     const svgSecondRef = useRef()
//
//     const countries = useSelector(state => state.countryByConfirmed)
//     const dataArray = []
//
//     countries.map(country => {
//         let findCountry = geoData.features.find(jsonCont => jsonCont.properties.name === country.country)
//
//         if (findCountry) {
//           findCountry.confirmed = country.confirmed
//           dataArray.push(findCountry)
//         }
//     })
//
//     const svgRef = useRef()
//     const wrapperRef = useRef()
//
//     const [selectedCountry, setSelectedCountry] = useState(null)
//
//     useEffect(() => {
//       const svg = select(svgRef.current)
//
//       const minProp = min(dataArray, feature => feature.confirmed);
//       const maxProp = max(dataArray, feature => feature.confirmed);
//
//       const colorScale = scaleLinear()
//         .domain([minProp, maxProp])
//         .range(["#ccc", "red"]);
//
//       const { width, height } = wrapperRef.current.getBoundingClientRect()
//
//       const projection = geoMercator()
//         .fitSize([width, height], selectedCountry || geoData)
//         .precision(100);
//
//       const pathGenerator = geoPath().projection(projection)
//
//       svg.selectAll('.country')
//         .data(dataArray)
//         .join('path')
//         .attr('class', 'country')
//         .attr("fill", feature => colorScale(feature.confirmed))
//         .attr('d', feature => pathGenerator(feature))
//         .on("click", feature => {
//           console.log(feature)
//         setSelectedCountry(selectedCountry === feature ? null : feature);
//       })
//
//       svg.selectAll('.diagram')
//       .data(dataArray)
//       .append("rect")
//       .attr('class', 'diagram')
//       .attr("fill", 'red')
//       .attr("x", 10)
//       .attr("y", 10)
//       .attr("width", 50)
//       .attr("height", 100)
//       .on("click", feature => {
//         console.log(feature)
//       setSelectedCountry(selectedCountry === feature ? null : feature);
//       })
//
//
//     }, [geoData, selectedCountry, dataArray])
//
//
//       return (
//         <Fragment>
//             <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
//               <svg ref={svgRef}/>
//             </div>
//
//             <svg ref={svgSecondRef}/>
//
//         </Fragment>
//   )
// }
//
// // svg.selectAll('.country')
// //   .data(data)
// //   .join('circle')
// //     .attr('r', value => value)
// //     .attr('cx', value => value)
// //     .attr('cy', value => value)
// //     .attr('stroke', 'red')
//
// export default Diagram