import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class GoogleMapComponent extends Component {

 render(){
      const GoogleMapFunction = withScriptjs(withGoogleMap(props =>
         <GoogleMap
           defaultZoom={8}
           defaultCenter={{ lat: -34.397, lng: 150.644 }}
         >
           <Marker
             position={{ lat: -34.397, lng: 150.644 }}
           />
         </GoogleMap>
       ));
   return(
      <div>
      <GoogleMapFunction
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key='}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
   );
 }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
  }
}

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

export default connect(mapStateToProps) (GoogleMapComponent)