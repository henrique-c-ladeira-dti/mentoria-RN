import React from 'react';
import {ImageSC} from './Avatar.styled';
import {TouchableOpacity} from 'react-native';

type AvatarProps = {
  image: string;
  onPress?: () => void;
};

export const Avatar: React.FC<AvatarProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ImageSC source={{uri: props.image}} />
    </TouchableOpacity>
  );
};
