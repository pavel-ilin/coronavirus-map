import React, { Component } from 'react';
import '../App.css';

import ConfirmedTotal from '../components/ConfirmedTotal'
import ConfirmedByCountry from '../components/ConfirmedByCountry'


class Confirmed extends Component {

  render() {
    return (
      <div>

        <div>
          <ConfirmedTotal />
        </div>

        <div>
          <ConfirmedByCountry />
        </div>

      </div>
    )
  }
}

export default Confirmed;