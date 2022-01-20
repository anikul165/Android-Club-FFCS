import React from 'react';

import {Text, View, Image, TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import Login from './src/components/Login';
import MyButton from './src/components/CustomButton';
import Avatar from './src/components/Avatar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome!</Text>
      <Avatar />
      <Login placeholder="Username" />
      <Login placeholder="Password" secureTextEntry={true} />
      <MyButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'italic',
    color: '#F72C00',
    fontFamily: 'Sans Serif',
  },
});
