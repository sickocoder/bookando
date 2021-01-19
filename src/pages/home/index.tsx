import React, { FC } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
  HomeHeader,
  SectionHeader,
  BookItemSmall,
  BookItemBig,
} from '../../elements';

import books, { bigSection } from './data';

const Home: FC = () => {
  return (
    <View
      style={{
        backgroundColor: '#F2F2F2',
        flex: 1,
      }}
    >
      <SafeAreaView>
        <HomeHeader />
        <ScrollView
          horizontal={false}
          contentContainerStyle={{ paddingBottom: 160 }}
          showsVerticalScrollIndicator={false}
        >
          <SectionHeader title="new releases" onMorePressed={() => {}} />
          <FlatList
            data={books}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <BookItemSmall key={item.title} {...item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 16,
            }}
            style={{ height: 256 }}
          />
          <FlatList
            pagingEnabled
            data={bigSection}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <BookItemBig key={item.title} image={item.image} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 218, marginTop: 16 }}
          />

          <SectionHeader title="top rated" onMorePressed={() => {}} />
          <FlatList
            data={books}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <BookItemSmall key={item.title} {...item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 16,
            }}
            style={{ height: 256 }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
