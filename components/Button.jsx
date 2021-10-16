import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, customStyles, color, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, customStyles]}
      onPress={onPress}
    >
      <Text style={[styles.textColor, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: 'blue',
    width: '100%',
    borderWidth: 0,
    height: 45,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300',
  },
});
