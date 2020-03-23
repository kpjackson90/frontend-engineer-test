import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import keys from '../config/keys';

const Map = ({
  mapContainerStyle,
  center,
  getPosition,
  showInfo,
  setShowInfo,
  film
}) => {
  return (
    <LoadScript id='script-loader' googleMapsApiKey={keys.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        id='marker-example'
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
      >
        <Marker position={getPosition()} onClick={() => setShowInfo(true)}>
          {showInfo && (
            <InfoWindow
              position={getPosition(1)}
              onCloseClick={() => setShowInfo(false)}
            >
              <div>
                {film ? (
                  <>
                    <h3>{film.attributes.Title}</h3>
                    <p>{film.attributes.Site}</p>
                    <p>{film.attributes.Address}</p>
                    <p>{new Date(film.attributes.ShootDate).toDateString()}</p>
                  </>
                ) : (
                  <h3>...</h3>
                )}
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
