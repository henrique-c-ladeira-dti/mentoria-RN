import React from 'react';
import {Container, ImageSC, TextSC} from './Card.styled';

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
    <TextSC>Name: {props.name}</TextSC>
    <TextSC>Status: {props.status}</TextSC>
    <TextSC>Species: {props.species}</TextSC>
    <TextSC>Gender: {props.gender}</TextSC>
  </Container>
);
