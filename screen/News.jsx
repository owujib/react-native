import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import NewsCard from '../components/NewCard';

export default function News() {
  const data = [
    {
      id: 1,
      title: 'How to make Pasta',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe quis natus incidunt nesciunt similique? Illum porro veritatis neque odio corporis nemo illo iusto. Voluptatum rem doloremque at perspiciatis neque!`,
      imageUrl: '../assets/images/image.jpg',
    },
    {
      id: 2,
      title: 'How to make Pasta part two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe quis natus incidunt nesciunt similique? Illum porro veritatis neque odio corporis nemo illo iusto. Voluptatum rem doloremque at perspiciatis neque!`,
      imageUrl: '../assets/images/image.jpg',
    },
    {
      id: 3,
      title: 'How to make Pasta part two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe quis natus incidunt nesciunt similique? Illum porro veritatis neque odio corporis nemo illo iusto. Voluptatum rem doloremque at perspiciatis neque!`,
      imageUrl: '../assets/images/image.jpg',
    },
    {
      id: 4,
      title: 'How to make Pasta part two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe quis natus incidunt nesciunt similique? Illum porro veritatis neque odio corporis nemo illo iusto. Voluptatum rem doloremque at perspiciatis neque!`,
      imageUrl: '../assets/images/image.jpg',
    },
    {
      id: 5,
      title: 'How to make Pasta part two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe quis natus incidunt nesciunt similique? Illum porro veritatis neque odio corporis nemo illo iusto. Voluptatum rem doloremque at perspiciatis neque!`,
      imageUrl: '../assets/images/image.jpg',
    },
    {
      id: 6,
      title: 'How to make Pasta part two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe quis natus incidunt nesciunt similique? Illum porro veritatis neque odio corporis nemo illo iusto. Voluptatum rem doloremque at perspiciatis neque!`,
      imageUrl: '../assets/images/image.jpg',
    },
    {
      id: 7,
      title: 'How to make Pasta part two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe quis natus incidunt nesciunt similique? Illum porro veritatis neque odio corporis nemo illo iusto. Voluptatum rem doloremque at perspiciatis neque!`,
      imageUrl: '../assets/images/image.jpg',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>News</Text>
      <View style={styles.main}>
        <View style={{ flex: 1 }}>
          <NewsCard news={data} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'brown',
    textAlign: 'center',
  },
  main: {
    width: '95%',
    padding: 5,
    flex: 0.95,
  },
});
