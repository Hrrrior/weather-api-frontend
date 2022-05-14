import React from 'react';

import { useCities } from '../../services/Cities/useCities';

import City from '../../components/Cities/City';
import AddCity from '../../components/Cities/AddCity';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

import classes from './CitiesView.module.css';

export const CitiesView = () => {
  const { data, errorMsg, isLoading, handleDeleteCity, handleAddCity } =
    useCities();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const cities = data?.map((city, index) => {
    const key = Math.random() * (index * 6 - index) + index;
    return (
      <City
        key={key}
        cityName={city.name}
        cityId={city.cityId}
        handleDeleteCity={() => handleDeleteCity(city.id)}
      />
    );
  });

  const maybeErrorMsg = errorMsg ? (
    <div className="errorAlert" role="alert" data-valmsg-summary="true">
      {errorMsg}
    </div>
  ) : null;

  return (
    <div className={classes.root}>
      <div className={classes.addCity}>
        <AddCity handleAddCity={handleAddCity} />
      </div>
      {maybeErrorMsg}
      <div className={classes.cities}>{cities}</div>
    </div>
  );
};

export default CitiesView;
