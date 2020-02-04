import React, { Component } from 'react';
import '../App.css';

import DeathsTotal from '../components/DeathsTotal'
import RegionsByDeaths from '../components/RegionsByDeaths'

class Deaths extends Component {

  render() {
    return (
      <div>

        <div>
          <DeathsTotal />
        </div>

        <div>
          <RegionsByDeaths />
        </div>
        
      </div>
    )
  }
}

export default Deaths;