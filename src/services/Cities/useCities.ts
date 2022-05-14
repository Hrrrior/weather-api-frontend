import React from 'react';
import { useRestRequests } from '../useRestRequests';
import { ICity } from '../dto/ICity';

export const useCities = () => {
  const {
    errorMsg,
    useGetAll,
    handleAddEntity: handleAddCity,
    handleDeleteEntity: handleDeleteCity,
  } = useRestRequests<ICity>({ path: 'cities' });

  const { data, isLoading } = useGetAll();

  return {
    data,
    errorMsg,
    isLoading,
    handleDeleteCity,
    handleAddCity,
  };
};
