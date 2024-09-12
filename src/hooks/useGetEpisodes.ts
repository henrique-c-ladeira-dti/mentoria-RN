import axios from 'axios';
import {EpisodesApiResponse, EpisodesResult} from '../apiTypes/episodes';
import {useInfiniteQuery} from '@tanstack/react-query';

const queryKey = ['getEpisodes'];

export const useGetEpisodes = () => {
  const promise = async ({pageParam = 1}): Promise<EpisodesApiResponse> => {
    const response = await axios<EpisodesApiResponse>({
      url: `https://rickandmortyapi.com/api/episode?page=${pageParam}`,
    });

    return response.data;
  };

  const {
    data,
    isLoading: loading,
    isError: error,
    fetchNextPage: _fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey,
    queryFn: promise,
    initialPageParam: 1,
    getNextPageParam: (lastPage, page) => {
      if (lastPage.info.pages > page.length) {
        return Number(lastPage.info.next?.split?.('=')?.[1] ?? 1);
      }
      return null;
    },
    staleTime: Infinity,
  });

  const episodesApiResponse: EpisodesResult[] =
    data?.pages.reduce(
      (acc, cur) => [...(acc ? acc : []), ...(cur.results ? cur.results : [])],
      [] as EpisodesResult[],
    ) ?? ([] as EpisodesResult[]);

  const fetchNextPage = () => {
    if (hasNextPage) {
      _fetchNextPage();
    }
  };

  return {
    fetchNextPage,
    episodes: episodesApiResponse,
    loading,
    error,
  };
};
