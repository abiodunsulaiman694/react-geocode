import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

function Map(props) {
  const { locations } = props;
  const zoom = 11;
  let center = {
    lat: 9.4,
    lng: 7.49
  };
  if (locations) {
    const average_lat =
        locations.reduce((sum, { latitude }) => sum + latitude, 0) /
        locations.length,
      average_long =
        locations.reduce((sum, { longitude }) => sum + longitude, 0) /
        locations.length;
    center = {
      lat: parseFloat(average_lat),
      lng: parseFloat(average_long)
    };
  }
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDPKDouutbqBPPowXh3SS_e_geno3FNL9s" }}
      defaultCenter={center}
      defaultZoom={zoom}
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
