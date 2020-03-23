import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from './components/Select';
import Map from './components/Map';

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('2 Guns');
  const [film, setFilm] = useState();
  const [showInfo, setShowInfo] = useState(false);

  const getFilms = async () => {
    const response = await axios.get(
      'https://c2t-cabq-open-data.s3.amazonaws.com/film-locations-json-all-records_03-19-2020.json'
    );
    setResults(response.data);
    setLoading(false);
    return response.data;
  };

  useEffect(() => {
    getFilms();
  }, []);

  useEffect(() => {
    const getFilm = item => {
      return results.features.find(({ attributes }) => {
        return item === attributes.Title;
      });
    };
    let film;
    if (!loading) {
      film = getFilm(value);
      setFilm(film);
    }
  }, [loading, value, results.features]);

  const mapContainerStyle = {
    height: '800px',
    width: '1600px'
  };

  const center = {
    lat: 39.5,
    lng: -98.35
  };

  const getPosition = offset => {
    let position = { lat: '', lng: '' };
    if (!offset) {
      offset = 0;
    }

    if (film) {
      position = {
        lat: film.geometry.y + offset,
        lng: film.geometry.x
      };
    }

    return position;
  };

  return (
    <>
      {loading ? (
        <p>Map Loading...</p>
      ) : (
        <div>
          <Select
            loading={loading}
            value={value}
            setValue={setValue}
            results={results}
          />
          <Map
            mapContainerStyle={mapContainerStyle}
            center={center}
            getPosition={getPosition}
            film={film}
            showInfo={showInfo}
            setShowInfo={setShowInfo}
          />
        </div>
      )}
    </>
  );
};

export default App;
