import React, { Component } from 'react';
import '../App.css';

import RecoveredTotal from '../components/RecoveredTotal'
import RegionsByRecovered from '../components/RegionsByRecovered'


class Recovered extends Component {

  render() {
    return (
      <div>

        <div>
          <RecoveredTotal />
        </div>

        <div>
          <RegionsByRecovered />
        </div>
        
      </div>
    )
  }
}

export default Recovered;