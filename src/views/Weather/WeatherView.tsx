import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';

import { useWeather } from '../../services/Weather/useWeather';

import Weather from '../../components/Weather/Weather';
// import AddWeather from '../../components/Weather/AddWeather';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

import classes from './WeatherView.module.css';

export const WeatherView = () => {
  const {
    data,
    errorMsg,
    isLoading,
    handleDeleteWeather,
    showAsList,
    setShowAsList,
  } = useWeather();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const weatherList = data?.map((weather, index) => {
    const key = Math.random() * (index * 6 - index) + index;
    return (
      <Weather
        key={key}
        weatherState={weather}
        handleDeleteWeather={() => handleDeleteWeather(weather.id)}
      />
    );
  });

  const maybeErrorMsg = errorMsg ? (
    <div className="errorAlert" role="alert" data-valmsg-summary="true">
      {errorMsg}
    </div>
  ) : null;

  const apiUrl = (
    <a target="_blank" rel="noreferrer" href="https://openweathermap.org/">
      OpenWeather api
    </a>
  );

  const headerText = (
    <span>Information about weather collected with the {apiUrl}.</span>
  );

  const weatherClass = showAsList ? classes.weatherList : classes.weatherGrid;
  return (
    <div className={classes.root}>
      <span className={classes.header}>
        {headerText}
        <div className={classes.buttons}>
          <button
            type="button"
            className="iconButton"
            onClick={() => setShowAsList(true)}
          >
            <FontAwesomeIcon icon={faList} />
          </button>
          <button
            type="button"
            className="iconButton"
            onClick={() => setShowAsList(false)}
          >
            <FontAwesomeIcon icon={faBorderAll} />
          </button>
        </div>
      </span>
      {maybeErrorMsg}
      <div className={weatherClass}>{weatherList}</div>
    </div>
  );
};

export default WeatherView;
