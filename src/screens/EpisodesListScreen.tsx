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

export const EpisodesListScreen: React.FC = () => {
  const {episodes, error, loading} = useGetEpisodes();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error</Text>}
        <View style={styles.listContainer}>
          {episodes.map(item => (
            <>
              <Text>name: {item.name}</Text>
              <Text>air date: {item.air_date}</Text>
              {item?.characters?.map((elem, idx) => (
                <Text>
                  character {idx + 1}: {elem}
                </Text>
              ))}
              <Text>created: {item.created}</Text>
            </>
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
