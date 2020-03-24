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
    //I would not normally load Env variables directly here but seems like heroku has an issue going on
    //so placed it here in interest of time and just for this test
    <LoadScript
      id='script-loader'
      googleMapsApiKey='AIzaSyDS0jYIBmI05t95nsup2FnFrobB7GHqoGw'
    >
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
