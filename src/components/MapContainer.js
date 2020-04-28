import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%',
  marginBottom: '56px',
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 19.058203,
          lng: 72.865106,
        }}
      >
        <Marker
          title={'Web Development'}
          name={'Caricode'}
          position={{ lat: 19.058203, lng: 72.865106 }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBINloYMwCoBj3Tqtdr0bUw3QZeZlAJlDU',
})(MapContainer)
