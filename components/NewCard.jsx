import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

import { PRODUCT_DETAILS_SCREEN } from '../constants';

export default function NewsCard({ navigation, route, news }) {
  return (
    <FlatList
      data={news}
      keyExtractor={(item) => {
        return item.id.toString();
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              padding: 5,
            }}
            onPress={() => {
              navigation.push(PRODUCT_DETAILS_SCREEN, {
                itemId: item.id,
              });
            }}
          >
            {/* left */}
            <View style={{ width: '45%' }}>
              <Image
                source={{
                  uri: 'https://www.lastingredient.com/wp-content/uploads/2016/08/burst-tomato-pasta15-819x1024.webp',
                }}
                resizeMode="cover"
                style={{ height: 130, borderRadius: 10 }}
              />
            </View>
            {/* right */}
            <View
              style={{
                width: '55%',
                flex: 1,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 25 }}>{item.title.slice(0, 50)}...</Text>
              <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                {item.body.slice(0, 100)}...
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
