import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import Confirmed from './containers/Confirmed'
import Map from './containers/Map'
import Deaths from './containers/Deaths'
import Recovered from './containers/Recovered'


class App extends Component {

  render() {

    return (
      <div className="App">
        {console.log(this.props.dataLoaded)}
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

const mapStateToProps = state => {
  return {
    dataLoaded: state.dataLoaded
  }
}

export default connect(mapStateToProps) (App)