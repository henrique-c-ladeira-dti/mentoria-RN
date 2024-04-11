/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetCharacters} from './src/hooks/useGetCharacters';
import {Card} from './src/components/Card/Card';

const App: React.FC = () => {
  const {characters, error, loading} = useGetCharacters();

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error</Text>}
        <View style={styles.listContainer}>
          {characters.map(item => (
            <Card
              key={item.name}
              image={item.image}
              gender={item.gender}
              name={item.name}
              species={item.species}
              status={item.status}
            />
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

export default App;
