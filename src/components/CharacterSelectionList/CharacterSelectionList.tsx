/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView} from 'react-native';
import {SequencedTransition, ZoomIn, ZoomOut} from 'react-native-reanimated';
import {useGetCharacterSelection} from '../../hooks/useGetCharacterSelection';
import {useRemoveFromCharacterSelection} from '../../hooks/useRemoveFromCharacterSelection';
import {Avatar} from '../Avatar/Avatar';

export const CharacterSelectionList: React.FC = () => {
  const {characterSelection} = useGetCharacterSelection();
  const {removeFromCharacterSelection} = useRemoveFromCharacterSelection();

  return (
    <ScrollView horizontal contentContainerStyle={{padding: 16, gap: 8}}>
      {characterSelection?.list?.map(item => (
        <Avatar
          key={item}
          entering={ZoomIn.duration(500)}
          exiting={ZoomOut.duration(500)}
          layout={SequencedTransition.duration(500)}
          image={item}
          onPress={() => {
            removeFromCharacterSelection(item);
          }}
        />
      ))}
    </ScrollView>
  );
};
