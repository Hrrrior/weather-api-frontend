import React from 'react';
import classes from './City.module.css';

interface ComponentProps {
  cityName: string;
  cityId: string | undefined;
  handleDeleteCity: () => void;
}

const City = ({
  cityName,
  cityId = 'UNKNOWN',
  handleDeleteCity,
}: ComponentProps) => {
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <div>City: {cityName}</div>
        <div>OWA ID: {cityId || 'UNKNOWN'}</div>
      </div>
      <button
        type="button"
        className="button"
        onClick={() => handleDeleteCity()}
      >
        Delete
      </button>
    </div>
  );
};

export default City;
