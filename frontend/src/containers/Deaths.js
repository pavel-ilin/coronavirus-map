import React, { Component } from 'react';
import '../App.css';

import DeathsTotal from '../components/DeathsTotal'
import RegionsByDeaths from '../components/RegionsByDeaths'

class Deaths extends Component {

  render() {
    return (
      <div>

        <div className='container'>
          <DeathsTotal />
        </div>

        <div className='container'>
          <RegionsByDeaths />
        </div>

      </div>
    )
  }
}

export default Deaths;