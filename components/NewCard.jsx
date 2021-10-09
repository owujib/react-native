import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';

export default function NewsCard(props) {
  return (
    <FlatList
      data={props.news}
      keyExtractor={(item) => {
        return item.id.toString();
      }}
      renderItem={({ item }) => {
        console.log(item.imageUrl);
        return (
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
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
              <Text style={{ fontSize: 25 }}>Title</Text>
              <Text style={{ fontSize: 16, textAlign: 'justify' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                blanditiis aliquam quis enim hic assumenda aut, deserunt quasi
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}
