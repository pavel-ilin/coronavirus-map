import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux'


const ConfirmedTotal = () => {
  const data = useSelector(state => state.totalComfirmed);

  return (
    <div>

      <div>
        <h3>Total Confirmed</h3>
      </div>

      <div>
        {data}
      </div>

    </div>
  )
}

export default ConfirmedTotal