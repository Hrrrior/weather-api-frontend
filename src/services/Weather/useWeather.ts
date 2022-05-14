import React, { useState } from 'react';
import { useRestRequests } from '../useRestRequests';
import { IWeather } from '../dto/IWeather';

export const useWeather = () => {
  const {
    errorMsg,
    useGetAll,
    handleDeleteEntity: handleDeleteWeather,
  } = useRestRequests<IWeather>({ path: 'weather' });

  const [showAsList, setShowAsList] = useState(false);

  const { data, isLoading } = useGetAll();

  return {
    data,
    errorMsg,
    isLoading,
    handleDeleteWeather,
    showAsList,
    setShowAsList,
  };
};
