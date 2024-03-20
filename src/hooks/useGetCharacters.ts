import {useEffect, useState} from 'react';
import {CharacterResult, CharactersApiResponse} from '../apiTypes/characters';
import axios from 'axios';

export const useGetCharacters = () => {
  const [characters, setCharacters] = useState<CharacterResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCharacters = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios<CharactersApiResponse>({
        url: 'https://rickandmortyapi.com/api/character',
      });
      const {data} = response;
      setCharacters(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    characters,
    loading,
    error,
  };
};
