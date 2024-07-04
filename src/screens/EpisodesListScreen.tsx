import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetEpisodes} from '../hooks/useGetEpisodes';
import {Card, CardProps} from '../components/Card/Card';

export const EpisodesListScreen: React.FC = () => {
  const {episodes, error, loading} = useGetEpisodes();

  const episodesCardFields: CardProps[] =
    episodes?.map(item => ({
      fields: [
        {label: 'Name', value: item.name},
        {label: 'Episode', value: item.episode},
        {label: 'Characters', value: item.characters.join(', ')},
      ],
    })) ?? [];

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error</Text>}
        <View style={styles.listContainer}>
          {episodesCardFields.map(item => (
            <Card key={item.fields?.[0]?.value} fields={item.fields} />
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
