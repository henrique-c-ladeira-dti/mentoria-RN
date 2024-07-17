import {Avatar} from '../../../components/Avatar/Avatar';
import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/common/useRedux/useRedux';
import {removeCharacter} from '../store/myCharacterSelectionSlice';
import {ScrollView} from 'react-native';

export const MyCharacterSelection: React.FC = () => {
  const {list} = useAppSelector(state => state.myCharacterSelection);
  const dispatch = useAppDispatch();

  return (
    <ScrollView horizontal>
      {list.map(item => (
        <Avatar
          image={item}
          onPress={() => {
            dispatch(removeCharacter(item));
          }}
        />
      ))}
    </ScrollView>
  );
};
