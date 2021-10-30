import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import { PRODUCT_DETAILS_SCREEN } from '../constants';

export default function Product(props) {
  const WINDOW_WIDTH = Dimensions.get('window').width;
  const WINDOW_HEIGHT = Dimensions.get('window').height;

  console.log('HEIGHT', WINDOW_HEIGHT);
  console.log('WIDTH', WINDOW_WIDTH / 6);

  const data = [
    {
      id: 1,
      imageUrl:
        'https://image.shutterstock.com/image-photo/bangkok-thailand-march-26-2018-260nw-1079458136.jpg',
      name: 'Air Jordan',
      price: 400,
    },
    {
      id: 2,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 500,
    },
    {
      id: 3,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 200,
    },
    {
      id: 4,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 100,
    },
    {
      id: 5,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 800,
    },
    {
      id: 6,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 1000,
    },
    {
      id: 7,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 100,
    },
  ];

  return (
    <View style={styles.productContainer}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.push(PRODUCT_DETAILS_SCREEN, {
                  itemId: item.id,
                });
              }}
              style={{
                width: '45%',
                height: 200,
                borderColor: '#ccc',
                borderWidth: 1,
                marginLeft: 10,
                marginBottom: 10,
                padding: 5,
                backgroundColor: '#fff',
                borderRadius: 10,
              }}
            >
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                resizeMode="cover"
                style={{ width: '100%', height: '70%' }}
              />
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productText: {
    fontSize: 20,
  },
});
