import React, { Component } from 'react';
import './App.css';

import Confirmed from './containers/Confirmed'
import Map from './containers/Map'
import Deaths from './containers/Deaths'
import Recovered from './containers/Recovered'



class App extends Component {

  render() {
    return (
      <div className="App">

        <div>
          <Confirmed />
        </div>

        <div>
          <Map />
        </div>

        <div>
          <Deaths />
        </div>

        <div>
          <Recovered />
        </div>

      </div>
    )
  }
}

export default App;
