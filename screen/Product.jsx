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

export default function Product() {
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
      price: 100,
    },
    {
      id: 2,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 100,
    },
    {
      id: 3,
      imageUrl:
        'https://image.shutterstock.com/image-photo/puebla-mexico-july-15-2019-600w-1451826344.jpg',
      name: 'Air Jordan',
      price: 100,
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
      price: 100,
    },
  ];

  return (
    <View style={styles.productContainer}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            backgroundColor: 'pink',
            flexDirection: 'row',
          }}
        >
          {data.map((item) => {
            return (
              <View style={{ width: '45%' }}>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 200,
                    borderColor: 'orange',
                    borderWidth: 1,
                    margin: 15,
                  }}
                >
                  <Image
                    source={{
                      uri: item.imageUrl,
                    }}
                    resizeMode="cover"
                    style={{ width: '100%', height: '70%' }}
                  />
                  <Text>Name</Text>
                  <Text>Price</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
  },
  productText: {
    fontSize: 20,
  },
});
