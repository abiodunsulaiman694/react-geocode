import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

function Map() {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDPKDouutbqBPPowXh3SS_e_geno3FNL9s" }}
      defaultCenter={center}
      defaultZoom={this.props.zoom}
    >
      {locations.map(location => (
        <Marker
          lat={location.latitude}
          lng={location.longitude}
          text={location.price}
          key={location.id}
        />
      ))}
    </GoogleMapReact>
  );
}

export default Map;
