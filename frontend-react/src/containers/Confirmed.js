import React, { Component } from 'react';
import '../App.css';

import ConfirmedTotal from '../components/ConfirmedTotal'
import ConfirmedByCountry from '../components/ConfirmedByCountry'


class Confirmed extends Component {

  render() {
    return (
      <div>

        <div className='container'>
          <ConfirmedTotal />
        </div>

        <div className='container'>
          <ConfirmedByCountry />
        </div>

      </div>
    )
  }
}

export default Confirmed;