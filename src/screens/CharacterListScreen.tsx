import React from 'react';
import {useGetCharacters} from '../hooks/useGetCharacters';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card, CardProps} from '../components/Card/Card';

export const CharacterListScreen: React.FC = () => {
  const {characters, error, loading} = useGetCharacters();

  const charactersCardFields: CardProps[] = characters.map(item => ({
    image: item.image,
    fields: [
      {label: 'Name', value: item.name},
      {label: 'Gender', value: item.gender},
      {label: 'Species', value: item.species},
      {label: 'Status', value: item.status},
    ],
  }));

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error</Text>}
        <View style={styles.listContainer}>
          {charactersCardFields.map(item => (
            <Card key={item.image} image={item.image} fields={item.fields} />
          ))}
        </View>
      </ScrollView>
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
