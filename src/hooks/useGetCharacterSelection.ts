import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from '@tanstack/react-query';

export const getCharacterSelectionKey = 'characterSelection';

export const getCharacterSelection = async (): Promise<{
  list: string[];
} | null> => {
  const value = await AsyncStorage.getItem(getCharacterSelectionKey);
  return value != null ? JSON.parse(value) : null;
};

export const useGetCharacterSelection = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: [getCharacterSelectionKey],
    queryFn: getCharacterSelection,
  });

  const promiseStatus = {
    error: isError,
    loading: isLoading,
  };

  return {
    characterSelection: data,
    ...promiseStatus,
  };
};
