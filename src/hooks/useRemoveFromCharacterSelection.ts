import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getCharacterSelection,
  getCharacterSelectionKey,
} from './useGetCharacterSelection';
import {useMutation, useQueryClient} from '@tanstack/react-query';

const removeFromCharacterSelection = async (
  character: string,
): Promise<void> => {
  const characterList = await getCharacterSelection();

  const newCharacterList = {
    list: characterList.list.filter(item => item !== character),
  };

  const value = JSON.stringify(newCharacterList);
  await AsyncStorage.setItem(getCharacterSelectionKey, value);
};

export const useRemoveFromCharacterSelection = () => {
  const client = useQueryClient();

  const {mutateAsync} = useMutation({
    mutationFn: removeFromCharacterSelection,
    onSuccess: () => {
      client.invalidateQueries({queryKey: [getCharacterSelectionKey]});
    },
  });

  return {removeFromCharacterSelection: mutateAsync};
};
