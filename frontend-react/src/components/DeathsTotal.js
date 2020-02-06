import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'


const DeathsTotal = () => {
  const data = useSelector(state => state.totalDeaths);

  return (
    <div>
      <div>
        <h2>Total Deaths</h2>
      </div>

      <div>
        <h2>{data}</h2>
      </div>
    </div>
  )
}

export default DeathsTotal