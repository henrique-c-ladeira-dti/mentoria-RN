import {CharacterResult, CharactersApiResponse} from '../apiTypes/characters';
import axios from 'axios';
import {usePromise} from './common/usePromise';

export const useGetCharacters = () => {
  const promise = async (): Promise<CharacterResult[]> => {
    const response = await axios<CharactersApiResponse>({
      url: 'https://rickandmortyapi.com/api/character',
    });
    return response.data.results;
  };

  const {data: characters, error, loading} = usePromise(promise);

  return {
    characters,
    loading,
    error,
  };
};
