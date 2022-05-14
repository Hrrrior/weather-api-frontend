import React from 'react';
import classes from './HomeView.module.css';

export const HomeView = () => {
  return (
    <div className={classes.root}>
      <span>
        Frontend for a REST based api running on{' '}
        <a target="_blank" rel="noreferrer" href="http://localhost:8080/">
          http://localhost:8080/
        </a>
        .
      </span>

      <span>
        New cities can be added in the cities tab. Dublicates will be rejected.
      </span>
      <span>
        The weather tab displays weather Information from the{' '}
        <a target="_blank" rel="noreferrer" href="https://openweathermap.org/">
          OpenWeather api
        </a>
        . The date on the weather states referes to the time when the
        information was collected and not the time when it was added to the
        database.
      </span>
    </div>
  );
};

export default HomeView;
