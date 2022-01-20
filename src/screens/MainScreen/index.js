import React from 'react';

//custom
import Login from '../../components/Login';
import Avatar from '../../components/Avatar';
import MyButton from '../../components/CustomButton';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Avatar />
      <Login />
      <MyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
