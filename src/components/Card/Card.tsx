import React from 'react';
import {
  Container,
  ImageSC,
  LabelContainer,
  LabelText,
  ValueText,
} from './Card.styled';

type LabelValue = {
  label: string;
  value: string;
};

export type CardProps = {
  image?: string;
  fields: LabelValue[];
};

export const Card: React.FC<CardProps> = props => (
  <Container>
    {props.image && <ImageSC source={{uri: props.image}} />}
    <LabelContainer>
      {props.fields.map(item => (
        <LabelText>
          {item.label}: <ValueText>{item.value}</ValueText>
        </LabelText>
      ))}
    </LabelContainer>
  </Container>
);
