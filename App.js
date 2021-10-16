import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Events from './screen/Events';
import News from './screen/News';
import Product from './screen/Product';
import {
  HOME_SCREEN,
  EVENTS_SCREEN,
  PRODUCT_SCREEN,
  NEWS_SCREEN,
  PRODUCT_DETAILS_SCREEN,
  LOGIN_SCREEN,
} from './constants';
import ProductDetails from './screen/ProductDetails';
import Login from './screen/Login';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName={PRODUCT_SCREEN}>
            <Stack.Screen component={News} name={NEWS_SCREEN} />
            <Stack.Screen
              component={Product}
              name={PRODUCT_SCREEN}
              options={{ title: 'custom' }}
            />
            <Stack.Screen component={Events} name={EVENTS_SCREEN} />
            <Stack.Screen
              component={ProductDetails}
              name={PRODUCT_DETAILS_SCREEN}
            />
            <Stack.Screen component={Login} name={LOGIN_SCREEN} />
          </Stack.Navigator>
        </View>
      </SafeAreaView>
    </NavigationContainer>
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
