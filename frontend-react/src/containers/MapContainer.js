import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, HeatMap } from 'google-maps-react';

import { connect } from 'react-redux'
import '../App.css';

const mapStyles = {
  width: '49%',
  height: '90%',
  position: 'relative',
  float: 'left',
};

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


  render() {
    const coords = { lat: -21.805149, lng: -49.0921657 };

    return (
      <div className='map'>
      <Map
        google={this.props.google}
        style={mapStyles}
        className={'map'}
        zoom={6}
        onClick={this.onMapClicked}
        initialCenter={{
            lat: 40.239195,
            lng: 116.492984
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