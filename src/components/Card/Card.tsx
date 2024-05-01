import React from 'react';
import {
  Container,
  ImageSC,
  LabelContainer,
  LabelText,
  ValueText,
} from './Card.styled';

type CardProps = {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

export const Card: React.FC<CardProps> = props => (
  <Container>
    <ImageSC source={{uri: props.image}} />
    <LabelContainer>
      <LabelText>
        Name: <ValueText>{props.name}</ValueText>
      </LabelText>
      <LabelText>
        Status: <ValueText>{props.status}</ValueText>
      </LabelText>
      <LabelText>
        Species: <ValueText>{props.species}</ValueText>
      </LabelText>
      <LabelText>
        Gender: <ValueText>{props.gender}</ValueText>
      </LabelText>
    </LabelContainer>
  </Container>
);
