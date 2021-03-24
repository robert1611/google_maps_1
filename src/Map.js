import React, { Component } from "react";
import location from "./Data.location.json";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "80%",
  height: "80%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={9}
        style={mapStyles}
        initialCenter={{
          lat: "32.6877",
          lng: "-100.9170",
        }}
      > 
        {location.map((item) => {
          console.log(typeof(item.iconUrl))
          return (
            <Marker
              title={item.name}
              name={item.name}
              position={{
                lat: item.coordinates.lat,
                lng: item.coordinates.lng,
              }}
              icon={{
                url: item.iconUrl,
                scaledSize: new this.props.google.maps.Size(10,10),
                anchor: new this.props.google.maps.Point(32,32)
              }}
            />
          );
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPblQ7UxCRSDO2iMqk2AqLmj6WLHsDo_I",
})(MapContainer);
