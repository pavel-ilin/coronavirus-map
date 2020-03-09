import React, { Component } from 'react';
import '../App.css';

import RecoveredTotal from '../components/RecoveredTotal'
import RegionsByRecovered from '../components/RegionsByRecovered'


class Recovered extends Component {

  render() {
    return (
      <div>

        <div className='container'>
          <RecoveredTotal />
        </div>

        <div className='container'>
          <RegionsByRecovered />
        </div>

      </div>
    )
  }
}

export default Recovered;