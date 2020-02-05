import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'


const RecoveredTotal = () => {
  const data = useSelector(state => state.totalRecovered);

  return (
    <div>
    
      <div>
        <h3>Total Recovered</h3>
      </div>

      <div>
        {data}
      </div>

    </div>
  )
}

export default RecoveredTotal