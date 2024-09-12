import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import {useGetEpisodes} from '../hooks/useGetEpisodes';
import {Card, CardProps} from '../components/Card/Card';
import {MyCharacterSelection} from '../features/MyCharacterSelection/views/MyCharacterSelection';
import {FadeInDown} from 'react-native-reanimated';

export const EpisodesListScreen: React.FC = () => {
  const {episodes, error, loading, fetchNextPage} = useGetEpisodes();

  const episodesCardFields: CardProps[] =
    episodes?.map(item => ({
      fields: [
        {label: 'Name', value: item.name},
        {label: 'Episode', value: item.episode},
        // {label: 'Characters', value: item.characters.join(', ')},
      ],
    })) ?? [];

  return (
    <SafeAreaView>
      {error && <Text>Error</Text>}
      <FlatList
        ListHeaderComponent={<MyCharacterSelection />}
        onEndReached={() => fetchNextPage()}
        data={episodesCardFields}
        renderItem={({item}) => (
          <Card
            entering={FadeInDown.duration(1000)}
            key={item.image}
            image={item.image}
            fields={item.fields}
          />
        )}
        ListFooterComponentStyle={{paddingBottom: 80}}
      />
      {loading && <ActivityIndicator size="large" />}
    </SafeAreaView>
  );
};
