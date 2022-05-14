import React from 'react';
import classes from './LoadingIndicator.module.css';

const LoadingIndicator = () => {
  return (
    <div className={classes.root}>
      <div className={classes.loader} />{' '}
    </div>
  );
};

export default LoadingIndicator;
