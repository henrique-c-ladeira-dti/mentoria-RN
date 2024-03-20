/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {useGetCharacters} from './src/hooks/useGetCharacters';

const App: React.FC = () => {
  const {characters, error, loading} = useGetCharacters();

  return (
    <SafeAreaView>
      <ScrollView>
        {loading && <Text style={style.text}>Loading...</Text>}
        {error && <Text style={style.text}>Error</Text>}
        {characters.map(item => (
          <Text style={style.text}>{item.name}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default App;
