import {CharactersApiResponse} from '../apiTypes/characters';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

export const useGetCharacters = (page = 1) => {
  const promise = async (currentPage: number) => {
    const response = await axios<CharactersApiResponse>({
      url: `https://rickandmortyapi.com/api/character?page=${currentPage}`,
    });

    return response.data;
  };

  const {data, isError, isLoading} = useQuery({
    queryKey: ['getCharacters', page],
    queryFn: () => promise(page),
    staleTime: Infinity,
  });

  const promiseStatus = {
    error: isError,
    loading: isLoading,
  };

  return {
    characters: data?.results,
    info: data?.info,
    ...promiseStatus,
  };
};
