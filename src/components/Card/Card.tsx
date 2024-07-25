import React, {forwardRef} from 'react';
import {
  Container,
  ImageSC,
  LabelContainer,
  LabelText,
  ValueText,
} from './Card.styled';
import Animated from 'react-native-reanimated';

export type LabelValue = {
  label: string;
  value: string;
};

export type CardProps = {
  image?: string;
  fields: LabelValue[];
  onPress?: () => void;
};

const StaticCard: React.FC<CardProps> = forwardRef((props, ref) => (
  <Container ref={ref} onPress={() => props?.onPress?.()}>
    {props.image && <ImageSC testID="card-image" source={{uri: props.image}} />}
    <LabelContainer>
      {props.fields.map(item => (
        <LabelText>
          {item.label}: <ValueText>{item.value}</ValueText>
        </LabelText>
      ))}
    </LabelContainer>
  </Container>
));

export const Card = Animated.createAnimatedComponent(StaticCard);
