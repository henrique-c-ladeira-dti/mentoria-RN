import React from 'react';
import {useGetCharacters} from '../hooks/useGetCharacters';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card, CardProps} from '../components/Card/Card';
import {useAppDispatch} from '../hooks/common/useRedux/useRedux';
import {MyCharacterSelection} from '../features/MyCharacterSelection/views/MyCharacterSelection';
import {addCharacter} from '../features/MyCharacterSelection/store/myCharacterSelectionSlice';
import Animated, {
  FadeInDown,
  SequencedTransition,
} from 'react-native-reanimated';

export const CharacterListScreen: React.FC = () => {
  const {characters, error, loading} = useGetCharacters();
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

  return (
    <SafeAreaView>
      <MyCharacterSelection />
      <Animated.ScrollView
        style={styles.container}
        layout={SequencedTransition}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error</Text>}
        <View style={styles.listContainer}>
          {charactersCardFields.map((item, index) => (
            <Card
              entering={FadeInDown.duration(1000).delay(200 * index)}
              onPress={makeOnPressCard(item)}
              key={item.image}
              image={item.image}
              fields={item.fields}
            />
          ))}
        </View>
      </Animated.ScrollView>
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
