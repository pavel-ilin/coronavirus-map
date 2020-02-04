import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'

const totalConfirmed = (data) => {

  let totalConfirmed = 0

  for(let i = 0; i < data.length; i++){
    for(let q = 0; q < data[i].provinces.length; q++){
      totalConfirmed += data[i].provinces[q].confirmed
    }
  }
  return totalConfirmed
}

const ConfirmedTotal = () => {
  const data = useSelector(state => state.data);

  return (
    <div>

      <div>
        <h3>Total Confirmed</h3>
      </div>

      <div>
        {totalConfirmed(data)}
      </div>

    </div>
  )
}

export default ConfirmedTotal