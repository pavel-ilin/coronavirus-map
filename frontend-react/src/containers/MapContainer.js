import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { useSelector } from 'react-redux'
import '../App.css';

const mapStyles = {
  width: '49%',
  height: '80%',
  position: 'relative',
  float: 'left'
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


  render() {
    return (
      <div className='map'>
          <Map
            google={this.props.google}
            style={mapStyles}
            className={'map'}
            zoom={14}
            onClick={this.onMapClicked}
            initialCenter={{
                lat: 100,
                lng: 122
            }}>
          </Map>
      </div>
    )
  }
}
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY
const WrappedContainer = GoogleApiWrapper({apiKey: API_KEY})(MapContainer);

export default WrappedContainer;