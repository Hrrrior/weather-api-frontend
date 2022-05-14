import React from 'react';
import { IWeather } from '../../services/dto/IWeather';
import classes from './Weather.module.css';

interface ComponentProps {
  weatherState: IWeather;
  handleDeleteWeather: () => void;
}

const Weather = ({ weatherState, handleDeleteWeather }: ComponentProps) => {
  const {
    cityName,
    cityId,
    country,
    humidity,
    windSpeed,
    datetime,
    temperature,
  } = weatherState;

  const dateToDislay = new Date(datetime).toLocaleDateString('et-EE', {
    // weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  });

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <span>
          Location: {cityName}, {country}
        </span>
        <span>OWA ID: {cityId || 'UNKNOWN'}</span>
        <span>Temperature: {temperature} ℃</span>
        <span>Humidity: {humidity}%</span>
        <span>Wind Speed: {windSpeed} m/s</span>
        <span>Time of measurement: {dateToDislay}</span>
      </div>
      <button
        type="button"
        className="button"
        onClick={() => handleDeleteWeather()}
      >
        Delete
      </button>
    </div>
  );
};

export default Weather;
