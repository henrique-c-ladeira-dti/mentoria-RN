import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getCharacterSelection,
  getCharacterSelectionKey,
} from './useGetCharacterSelection';
import {useMutation, useQueryClient} from '@tanstack/react-query';

const addToCharacterSelection = async (character: string): Promise<void> => {
  const characterList = await getCharacterSelection();

  if (characterList?.list.some(item => item === character)) {
    return;
  }

  const list = characterList?.list ?? [];

  const newCharacterList = {
    list: [...list, character],
  };

  const value = JSON.stringify(newCharacterList);
  await AsyncStorage.setItem(getCharacterSelectionKey, value);
};

export const useAddToCharacterSelection = () => {
  const client = useQueryClient();

  const {mutateAsync} = useMutation({
    mutationFn: addToCharacterSelection,
    onSuccess: () => {
      client.invalidateQueries({queryKey: [getCharacterSelectionKey]});
    },
  });

  return {addToCharacterSelection: mutateAsync};
};
