import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'


const RecoveredTotal = () => {
  const data = useSelector(state => state.totalRecovered);

  return (
    <div>

      <div>
        <h2>Total Recovered</h2>
      </div>

      <div>
        <h2>{data}</h2>
      </div>

    </div>
  )
}

export default RecoveredTotal