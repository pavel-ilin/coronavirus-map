import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import Confirmed from './containers/Confirmed'
import MapContainer from './containers/MapContainer'
import Deaths from './containers/Deaths'
import Recovered from './containers/Recovered'
import { loadData } from './actions'


class App extends Component {

  state = {
    dataLoading: false
  }

  loadData = () => {
    this.props.loadData()
    this.setState({
      dataLoading: true
    })
  }

  render() {

    return (

      <div className="App">
      {!this.state.dataLoading ? this.loadData() : null}
        {
          !this.props.dataLoaded ? <div>Data loading</div> :

      <div className="App">

          <div>
            <Confirmed />
          </div>

          <div>
            <MapContainer />
          </div>

          <div>
            <Deaths />
          </div>

          <div>
            <Recovered />
          </div>

        </div>
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataLoaded: state.dataLoaded,
  }
}

export default connect(mapStateToProps, {loadData}) (App)