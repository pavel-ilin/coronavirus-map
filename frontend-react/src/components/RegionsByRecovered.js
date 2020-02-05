import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'

import { sortCountriesRecovered } from '../services/helperFunctions'


const RegionsByRecovered = () => {

  const data = useSelector(state => state.countryByRecovered)

  const renderDom = sortCountriesRecovered(data).map((country) => {
    return <div>{country.country}: {country.recovered}</div>
  })

  return (
    <div>
      <div>{renderDom}</div>
    </div>
  )
}

export default RegionsByRecovered