import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '80%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={
          {
            lat: 32.6,
            lng: -101.0,

           
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCPblQ7UxCRSDO2iMqk2AqLmj6WLHsDo_I'
})(MapContainer);