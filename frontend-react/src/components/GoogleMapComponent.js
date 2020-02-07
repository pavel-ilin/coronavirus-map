import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle, InfoWindow } from "react-google-maps"
import { infoWindowClick } from '../actions'

function Map() {
  const data = useSelector(state => state.countries)
  const activeInfoWindow = useSelector(state => state.activeInfoWindow)
  const dispatch = useDispatch();


  function renderInfoWindow(data){
    return (
      <InfoWindow position={{
        lat: parseFloat(39.905351),
        lng: parseFloat(116.408948)}}>
            <div style={{'color':'black'}}>
               Title:
            </div>
      </InfoWindow>
    )
  }


  function onClick (data) {
    console.log(data)
    dispatch(infoWindowClick())
  }

  function renderMarks () {
    return data.map((country) => {
      return country.provinces.map((province) => {
        return(

          <Fragment key={province.id}>
              <Marker
                position={{
                  lat: parseFloat(province.latitude),
                  lng: parseFloat(province.longitude)
                }}
                onClick={onClick}
                >
              </Marker>
              <Circle
                defaultCenter={{
                  lat: parseFloat(province.latitude),
                  lng: parseFloat(province.longitude)
                }}
                radius={province.confirmed*30}
              />
            </Fragment>
        )
      })
    })
  }

  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 39.905351, lng: 116.408948 }}
    >
      {renderMarks()}

      {activeInfoWindow ? renderInfoWindow() : null}


    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMapComponent() {
  return (
    <div style={{ width: "60vw", height: "95vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_MAPS_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}