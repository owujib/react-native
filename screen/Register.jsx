import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import { NEWS_SCREEN } from '../constants';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textValidation, setTextValidation] = useState({
    email: null,
    password: null,
  });
  return (
    <View
      style={{
        flex: 0.85,
        backgroundColor: 'white',
        padding: 30,
        justifyContent: 'center',

        width: '100%',
      }}
    >
      <View
        style={{
          flex: 0.2,
          padding: 5,
          justifyContent: 'center',
        }}
      >
        <Text style={[styles.textOrange, styles.textMain]}>Sign Up</Text>
        <Text style={{ color: '#777777', fontSize: 20 }}>
          Sign Up to your account to access thousans of products
        </Text>
      </View>
      <KeyboardAvoidingView
        style={{
          flex: 0.6,
          justifyContent: 'space-between',
        }}
        behavior={'padding'}
      >
        <ScrollView>
          <View
            style={{
              flex: 0.8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextInput
              value={email}
              style={[
                styles.input,
                {
                  borderBottomColor:
                    textValidation.password === 'empty field' ? 'red' : 'black',
                },
              ]}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={[
                styles.input,
                {
                  borderBottomColor:
                    textValidation.password === 'empty field' ? 'red' : 'black',
                },
              ]}
              placeholder="enter your password"
              secureTextEntry
            />

            <View style={{ width: '100%' }}>
              <Button
                title="Login"
                color="white"
                customStyles={{
                  backgroundColor: '#ff5722cc',
                }}
                onPress={() => {
                  if (email === '' || password === '') {
                    Alert.alert('please fill out your email');
                    setTextValidation({
                      email: 'empty field ',
                      password: 'empty field',
                    });
                    return;
                  }
                  navigation.push(NEWS_SCREEN);
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    marginBottom: 30,
    padding: 5,
    borderRadius: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  textOrange: {
    color: '#ff5722cc',
  },
  textMain: {
    fontSize: 36,
    fontWeight: '400',
  },
});
