import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Product() {
  const WINDOW_WIDTH = Dimensions.get('window').width;
  const WINDOW_HEIGHT = Dimensions.get('window').height;

  console.log('HEIGHT', WINDOW_HEIGHT);
  console.log('WIDTH', WINDOW_WIDTH / 6);

  const data = [
    {
      id: 1,
      name: 'Iphone',
    },
    {
      id: 2,
      name: 'Samsung',
    },
    {
      id: 3,
      name: 'Tecno',
    },
    {
      id: 4,
      name: 'Itel',
    },
  ];

  return (
    <View style={styles.productContainer}>
      {data.map((el) => {
        return (
          <View
            style={{
              width: WINDOW_WIDTH / 4.5,
              height: 200,
              margin: 5,
              backgroundColor: 'aqua',
            }}
            key={el.id}
          >
            <Text style={styles.productText}>{el.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'brown',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  productText: {
    fontSize: 20,
  },
});
