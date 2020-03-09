import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import Confirmed from './containers/Confirmed'
import Deaths from './containers/Deaths'
import Recovered from './containers/Recovered'
import { loadData } from './actions'
import MapContainer from './containers/MapContainer'
import Diagram from './containers/Diagram'
import GoogleMapComponent from './components/GoogleMapComponent'


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

          <div className='container'>
            <Confirmed />
          </div>

          <div className='container'>
            <MapContainer />
            <div className='container'>
              <Diagram />
            </div>
          </div>

          <div className='container'>
            <Deaths />
          </div>

          <div className='container'>
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