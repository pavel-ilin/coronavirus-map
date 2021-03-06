import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'

import { sortCountriesDeaths } from '../services/helperFunctions'


const RegionsByDeaths = () => {

  const data = useSelector(state => state.countryByDeaths)

  const renderDom = sortCountriesDeaths(data).map((country) => {

    if (country.deaths > 0){
      return <div>{country.country}: {country.deaths}</div>
     }
  })


  return (
    <div>
      <div><p><b>By country</b></p></div>
      <div><p>{renderDom}</p></div>
    </div>
  )
}

export default RegionsByDeaths