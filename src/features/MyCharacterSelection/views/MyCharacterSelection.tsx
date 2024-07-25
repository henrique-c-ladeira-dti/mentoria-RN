/* eslint-disable react-native/no-inline-styles */
import {Avatar} from '../../../components/Avatar/Avatar';
import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/common/useRedux/useRedux';
import {removeCharacter} from '../store/myCharacterSelectionSlice';
import {ScrollView} from 'react-native';
import {SequencedTransition, ZoomIn, ZoomOut} from 'react-native-reanimated';

export const MyCharacterSelection: React.FC = () => {
  const {list} = useAppSelector(state => state.myCharacterSelection);
  const dispatch = useAppDispatch();

  return (
    <ScrollView horizontal contentContainerStyle={{padding: 16, gap: 8}}>
      {list.map(item => (
        <Avatar
          key={item}
          entering={ZoomIn.duration(500)}
          exiting={ZoomOut.duration(500)}
          layout={SequencedTransition.duration(500)}
          image={item}
          onPress={() => {
            dispatch(removeCharacter(item));
          }}
        />
      ))}
    </ScrollView>
  );
};
