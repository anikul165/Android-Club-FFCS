import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function Avatar() {
  return (
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvfOGH7d2AzEPbBfWTRn_Vbf0phPhaNaYOg&usqp=CAU',
      }}
      style={styles.design}
    />
  );
}

const styles = StyleSheet.create({
  design: {
    height: 100,
    width: 100,
  },
});
