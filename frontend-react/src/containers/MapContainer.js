import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, HeatMap, Circle } from 'google-maps-react';

import { connect } from 'react-redux'
import '../App.css';

const mapStyles = {
  width: '700px',
  height: '100%',
  position: 'relative',
  float: 'left'
};


const containerStyles = {
  width: '100%',
  height: '100%',
  position: 'relative',
};


const coords = { lat: -21.805149, lng: -49.0921657 };


class MapContainer extends Component {

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
  }



  onMarkerClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    }

      onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: {}
        })
      }
    }

    renderMarks () {
      return this.props.countries.map((country) => {
        return country.provinces.map((province) => {
          return <Marker
            position={{lat: parseFloat(province.latitude), lng: parseFloat(province.longitude)}}
            onClick={this.onMarkerClick}
            location={province.title}
            confirmed={province.confirmed}
            deaths={province.deaths}
            recovered={province.recovered}
          />

        })
      })
    }

    lastUpdate () {
      let date = this.props.countries[0].provinces[0].last_update.slice(0, 10)
      return date
    }


  render() {
    return (
      <div className='map'>
        <div><p>Last updated: {this.lastUpdate()}</p></div>
      <Map
        google={this.props.google}
        style={mapStyles}
        containerStyle={containerStyles}
        className={'map'}
        zoom={4}
        onClick={this.onMapClicked}
        initialCenter={{
            lat: 31.295391,
            lng: 112.163214
        }}>

          {this.renderMarks()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h2>{this.state.activeMarker.title}</h2>
                <p>Location: {this.state.activeMarker.location}</p>
                <p>Confirmed: {this.state.activeMarker.confirmed}</p>
                <p>Deaths: {this.state.activeMarker.deaths}</p>
                <p>Recovered: {this.state.activeMarker.recovered}</p>
            </div>
        </InfoWindow>
      </Map>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    countries: state.countries,
  }
}

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY
const WrappedContainer = GoogleApiWrapper({apiKey: API_KEY})(MapContainer);
export default connect(mapStateToProps) (WrappedContainer)