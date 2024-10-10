import React, {useMemo, useState} from 'react';
import {useGetCharacters} from '../hooks/useGetCharacters';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Card, CardProps} from '../components/Card/Card';
import {FadeInDown} from 'react-native-reanimated';
import {PaginationList} from '../components/PaginationList/PaginationList';
import {useAddToCharacterSelection} from '../hooks/useAddToCharacterSelection';
import {CharacterSelectionList} from '../components/CharacterSelectionList/CharacterSelectionList';

export const CharacterListScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const {characters, error, loading, info} = useGetCharacters(page);
  const {addToCharacterSelection} = useAddToCharacterSelection();
  const [searchText, setSearchText] = useState('');

  const filteredCharacters = useMemo(
    () => characters?.filter(item => item.name.includes(searchText)),
    [characters, searchText],
  );

  const charactersCardFields: CardProps[] =
    filteredCharacters?.map(item => ({
      image: item.image,
      fields: [
        {label: 'Name', value: item.name},
        {label: 'Gender', value: item.gender},
        {label: 'Species', value: item.species},
        {label: 'Status', value: item.status},
      ],
    })) ?? [];

  const makeOnPressCard = (item: CardProps) => () => {
    addToCharacterSelection(item.image ?? '');
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
      <View style={styles.container}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error</Text>}
        <FlatList
          ListHeaderComponent={<CharacterSelectionList />}
          data={charactersCardFields}
          numColumns={2}
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
        {/* <ScrollView>
          {charactersCardFields.map(item => (
            <Card
              entering={FadeInDown.duration(1000)}
              exiting={FadeOut.duration(400)}
              layout={SequencedTransition.duration(500)}
              onPress={makeOnPressCard(item)}
              key={item.image}
              image={item.image}
              fields={item.fields}
            />
          ))}
        </ScrollView> */}
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
  searchInput: {
    padding: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
  },
});
