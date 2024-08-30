import React, {useState} from 'react';
import {useGetCharacters} from '../hooks/useGetCharacters';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card, CardProps} from '../components/Card/Card';
import {useAppDispatch} from '../hooks/common/useRedux/useRedux';
import {MyCharacterSelection} from '../features/MyCharacterSelection/views/MyCharacterSelection';
import {addCharacter} from '../features/MyCharacterSelection/store/myCharacterSelectionSlice';
import {FadeInDown} from 'react-native-reanimated';
import {PaginationList} from '../components/PaginationList/PaginationList';

export const CharacterListScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const {characters, error, loading, info} = useGetCharacters(page);
  const dispatch = useAppDispatch();

  const charactersCardFields: CardProps[] =
    characters?.map(item => ({
      image: item.image,
      fields: [
        {label: 'Name', value: item.name},
        {label: 'Gender', value: item.gender},
        {label: 'Species', value: item.species},
        {label: 'Status', value: item.status},
      ],
    })) ?? [];

  const makeOnPressCard = (item: CardProps) => () => {
    dispatch(addCharacter(item.image ?? ''));
  };

  const onPressNext = () => {
    setPage(prev => prev + 1);
  };
  const onPressPrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView>
      <MyCharacterSelection />
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error</Text>}
        <FlatList
          onEndReached={() => console.tron?.log('chegou')}
          data={charactersCardFields}
          renderItem={({item}) => (
            <Card
              entering={FadeInDown.duration(1000)}
              onPress={makeOnPressCard(item)}
              key={item.image}
              image={item.image}
              fields={item.fields}
            />
          )}
          ListFooterComponentStyle={{paddingBottom: 80}}
          ListFooterComponent={
            <PaginationList
              page={page}
              numberOfPages={info?.pages}
              onPressNext={onPressNext}
              onPressPrevious={onPressPrevious}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
