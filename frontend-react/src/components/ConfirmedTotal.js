import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'


const ConfirmedTotal = () => {
  const data = useSelector(state => state.totalComfirmed);

  return (
    <div>

      <div>
        <h2>Total Confirmed</h2>
      </div>

      <div>
        <h2>{data}</h2>
      </div>

    </div>
  )
}

export default ConfirmedTotal