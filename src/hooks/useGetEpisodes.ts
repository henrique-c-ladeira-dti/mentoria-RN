import {useEffect, useState} from 'react';
import axios from 'axios';
import {EpisodesApiResponse, EpisodesResult} from '../apiTypes/episodes';

export const useGetEpisodes = () => {
  const [episodes, setEpisodes] = useState<EpisodesResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getEpisodes = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios<EpisodesApiResponse>({
        url: 'https://rickandmortyapi.com/api/episode',
      });
      const {data} = response;
      setEpisodes(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return {
    episodes,
    loading,
    error,
  };
};
