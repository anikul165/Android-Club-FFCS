import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default function MyButton() {
  return (
    <Button style={{fontSize: 20, color: 'green'}} title="SUBMIT">
      SUBMIT
    </Button>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '100%',
    backgroundColor: '#F72C00',
    margin: 10,
  },
});
