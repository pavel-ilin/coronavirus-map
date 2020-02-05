import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'

import { sortCountriesDeaths } from '../services/helperFunctions'


const RegionsByDeaths = () => {

  const data = useSelector(state => state.countryByDeaths)

  const renderDom = sortCountriesDeaths(data).map((country) => {
    return <div>{country.country}: {country.deaths}</div>
  })


  return (
    <div>
      <div>{renderDom}</div>
    </div>
  )
}

export default RegionsByDeaths