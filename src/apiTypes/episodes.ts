import {Info} from './info';

export type EpisodesResult = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type EpisodesApiResponse = {
  info: Info;
  results: EpisodesResult[];
};
