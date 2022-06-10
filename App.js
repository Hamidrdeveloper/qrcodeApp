import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { AuthRoutes } from './src/Navigator';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/rigester';

function App(props) {
  return (
    <View style={styles.container}>
      <AuthRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  rect: {
    flex: 0.5,
    backgroundColor: 'rgba(206, 206, 206,1)',
  },
  rect2: {
    flex: 0.5,
    backgroundColor: 'rgba(223, 223, 223,1)',
  },
  zuruck: {
    top: 50,
    left: 52,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  icon: {
    top: 42,
    left: 12,
    position: 'absolute',
    color: 'rgba(128,128,128,1)',
    fontSize: 30,
  },
});

export default App;
