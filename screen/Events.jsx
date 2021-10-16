import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TextInput,
  Switch,
  Modal,
  SafeAreaView,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { NEWS_SCREEN } from '../constants';

export default function Events(props) {
  const [name, setName] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text>Events</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Switch
        trackColor={{ false: 'red', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        ios_backgroundColor="pink"
        value={isEnabled}
      />
      <Button
        title="click me"
        color="red"
        onPress={() => {
          if (name === '') {
            Alert.alert('your input is empty');
          } else {
            Alert.alert('your name is ' + name);
          }
        }}
      />
      <Button
        title="open modal"
        color="pink"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Button
        title="Go to news"
        onPress={() => {
          props.navigation.navigate(NEWS_SCREEN);
        }}
      />

      <Modal
        style={{ opacity: 0.7, justifyContent: 'flex-end' }}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'pink',
            justifyContent: 'flex-end',
            flexDirection: 'column',
          }}
        >
          <Button
            title="close modal"
            onPress={() => {
              setModalVisible(false);
            }}
          />

          <Text>My modal</Text>
          <View style={{ flex: 0.9 }}>
            <WebView
              style={{ flex: 1 }}
              source={{ uri: 'https://alabiansolutions.com' }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
