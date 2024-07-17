import axios from 'axios';
import {EpisodesApiResponse, EpisodesResult} from '../apiTypes/episodes';
import {usePromise} from './common/usePromise/usePromise';

export const useGetEpisodes = () => {
  const promise = async (): Promise<EpisodesResult[]> => {
    const response = await axios<EpisodesApiResponse>({
      url: 'https://rickandmortyapi.com/api/episode',
    });

    return response.data.results;
  };

  const {data: episodes, loading, error} = usePromise(promise);

  return {
    episodes,
    loading,
    error,
  };
};
