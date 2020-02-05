import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'


const DeathsTotal = () => {
  const data = useSelector(state => state.totalDeaths);

  return (
    <div>
      <div>
        <h3>Total Deaths</h3>
      </div>

      <div>
        {data}
      </div>
    </div>
  )
}

export default DeathsTotal