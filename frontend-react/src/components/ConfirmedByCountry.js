import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'


const ConfirmedByCountry = () => {

  const testVariable = useSelector(state => state.dataLoaded);

  return (
    <div>
      Confirmed by country component
    </div>
  )
}

export default ConfirmedByCountry