import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Events from './screen/Events';
import News from './screen/News';
import Product from './screen/Product';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <News />
        {/* <Product /> */}
        {/* <Events /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  safeContainer: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});
