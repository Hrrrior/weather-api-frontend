import React, { useState } from 'react';

import {
  useQuery,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import axios, { AxiosResponse } from 'axios';
import httpCLient from '../utility/httpClient';

interface ServiceProps {
  path: string;
}

export const useRestRequests = <TEntity>({ path }: ServiceProps) => {
  const queryClient = useQueryClient();

  const getAll = async (): Promise<TEntity[]> => {
    const res = await httpCLient.get(path);
    return res.data;
  };

  const deleteEntity = async (id: string): Promise<void> => {
    const res = await httpCLient.delete(`${path}/${id}`);
    return res.data;
  };

  const addEntity = async (entiy: TEntity): Promise<TEntity> => {
    const res = await httpCLient.post(path, entiy);
    return res.data;
  };

  const [errorMsg, setErrorMsg] = useState(null);

  const useGetAll = () => {
    return useQuery<TEntity[], Error>(path, () => getAll());
  };

  const deleteRequestMutation: UseMutationResult<void, Error, string> =
    useMutation((id: string) => deleteEntity(id), {
      onSuccess: () => {
        queryClient.invalidateQueries(path);
        setErrorMsg(null);
      },
      onError: (e: Error) => {
        if (axios.isAxiosError(e)) {
          const response = e.response as AxiosResponse;
          setErrorMsg(response?.data?.message || 'Something went wrong.');
        }
      },
    });

  const addRequestMutation: UseMutationResult<TEntity, Error, TEntity> =
    useMutation((entiy: TEntity) => addEntity(entiy), {
      onSuccess: () => {
        queryClient.invalidateQueries(path);
        setErrorMsg(null);
      },
      onError: (e: Error) => {
        if (axios.isAxiosError(e)) {
          const response = e.response as AxiosResponse;
          setErrorMsg(response?.data?.message || 'Something went wrong.');
        }
      },
    });

  const handleDeleteEntity = (id: string | null = null) => {
    if (id !== null) {
      deleteRequestMutation.mutate(id);
    }
  };

  const handleAddEntity = (entity: TEntity | null = null) => {
    if (entity !== null) {
      addRequestMutation.mutate(entity);
    }
  };
  return {
    errorMsg,
    useGetAll,
    handleAddEntity,
    handleDeleteEntity,
  };
};
