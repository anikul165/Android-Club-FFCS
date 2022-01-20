import React from 'react';
import {StyleSheet, Text, View, TextInput, username} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        username="username"
        style={styles.login}
        keyboardType={'default'}
        maxLength={16}
      />
      <TextInput
        placeholder="Password"
        username="username"
        style={styles.login}
        keyboardType={'default'}
        secureTextEntry={true}
        maxLength={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    color: '#000',
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 18,
    padding: 15,
    width: '80%',
  },

  container: {
    borderColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
