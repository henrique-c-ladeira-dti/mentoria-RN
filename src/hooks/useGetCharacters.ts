import {CharactersApiResponse} from '../apiTypes/characters';
import axios from 'axios';
import {PromiseStatus} from './common/usePromise/usePromise';
import {useEffect, useState} from 'react';

export const useGetCharacters = (page = 1) => {
  const [data, setData] = useState<CharactersApiResponse>();
  const [promiseStatus, setPromiseStatus] = useState<PromiseStatus>({
    error: false,
    loading: false,
  });

  useEffect(() => {
    const executePromise = async () => {
      try {
        setPromiseStatus({error: false, loading: true});
        const response = await axios<CharactersApiResponse>({
          url: `https://rickandmortyapi.com/api/character?page=${page}`,
        });
        setData(response.data);
        setPromiseStatus({error: false, loading: false});
      } catch {
        setData(undefined);
        setPromiseStatus({error: true, loading: false});
      }
    };

    executePromise();
  }, [page]);

  return {
    characters: data?.results,
    info: data?.info,
    ...promiseStatus,
  };
};
