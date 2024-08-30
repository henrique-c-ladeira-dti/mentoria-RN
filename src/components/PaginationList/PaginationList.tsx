import React from 'react';
import {Container, PageButton} from './PaginationList.styled';
import {Text, View} from 'react-native';

type PaginationListProps = {
  numberOfPages?: number;
  page?: number;
  onPressNext: () => void;
  onPressPrevious: () => void;
};

export const PaginationList: React.FC<PaginationListProps> = props => (
  <Container>
    <Text>
      {props.page} of {props.numberOfPages}
    </Text>
    <View style={{flexDirection: 'row'}}>
      <PageButton onPress={props.onPressPrevious}>
        <Text> Previous</Text>
      </PageButton>
      <PageButton onPress={props.onPressNext}>
        <Text> Next</Text>
      </PageButton>
    </View>
  </Container>
);
