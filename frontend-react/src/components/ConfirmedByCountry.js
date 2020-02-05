import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'

import { sortCountries } from '../services/helperFunctions'


const ConfirmedByCountry = () => {

  const data = useSelector(state => state.countryByConfirmed)

  const renderDom = sortCountries(data).map((country) => {
    return <div>{country.country}: {country.confirmed}</div>
  })

  return (
    <div>
      <div>{renderDom}</div>
    </div>
  )
}

export default ConfirmedByCountry