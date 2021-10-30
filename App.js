import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
  REGISTER_SCREEN,
} from './constants';
import ProductDetails from './screen/ProductDetails';
import Login from './screen/Login';
import Register from './screen/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Tab.Navigator
            initialRouteName={PRODUCT_SCREEN}
            screenOptions={({ route }) => {
              return {
                tabBarIcon: ({ focused, size, color }) => {
                  if (route.name === PRODUCT_SCREEN) {
                    return (
                      <FontAwesome
                        name={'product-hunt'}
                        size={24}
                        color={focused ? 'green' : 'black'}
                      />
                    );
                  } else if (route.name === LOGIN_SCREEN) {
                    return (
                      <FontAwesome
                        name={focused ? 'user-circle-o' : 'user-circle'}
                        size={24}
                        color={focused ? 'green' : 'black'}
                      />
                    );
                  } else if (route.name === NEWS_SCREEN) {
                    return (
                      <Entypo
                        name="home"
                        size={24}
                        color={focused ? 'green' : 'black'}
                      />
                    );
                  } else if (route.name === REGISTER_SCREEN) {
                    return (
                      <Entypo
                        name="remove-user"
                        size={24}
                        color={focused ? 'green' : 'black'}
                      />
                    );
                  }
                },
              };
            }}
          >
            <Tab.Screen
              component={News}
              name={NEWS_SCREEN}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              component={Product}
              name={PRODUCT_SCREEN}
              options={{
                headerShown: false,
              }}
            />
            {/* <Tab.Screen component={Events} name={EVENTS_SCREEN} /> */}
            {/* <Tab.Screen
              component={ProductDetails}
              name={PRODUCT_DETAILS_SCREEN}
            /> */}

            {user ? (
              <Tab.Screen
                component={Login}
                name={LOGIN_SCREEN}
                options={{
                  headerShown: false,
                }}
              />
            ) : (
              <Tab.Screen
                component={Register}
                name={REGISTER_SCREEN}
                options={{
                  headerShown: false,
                }}
              />
            )}
            {/* <Tab.Screen
              component={!user ? Login : Register}
              name={LOGIN_SCREEN}
              options={{
                headerShown: false,
              }}
            /> */}
          </Tab.Navigator>
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
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },
});
