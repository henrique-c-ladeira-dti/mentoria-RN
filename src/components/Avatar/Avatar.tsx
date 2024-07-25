import React, {forwardRef} from 'react';
import {ImageSC} from './Avatar.styled';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Animated from 'react-native-reanimated';

type AvatarProps = {
  image: string;
  onPress?: () => void;
} & TouchableOpacityProps;

const StaticAvatar: React.FC<AvatarProps> = forwardRef(
  ({onPress, image, ...otherProps}, ref) => {
    return (
      <TouchableOpacity ref={ref} onPress={onPress} {...otherProps}>
        <ImageSC source={{uri: image}} />
      </TouchableOpacity>
    );
  },
);

export const Avatar = Animated.createAnimatedComponent(StaticAvatar);
