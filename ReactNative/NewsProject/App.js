import React from 'react';
import { View } from 'react-native';
import MainStack from './navigation';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <MainStack />
    </View>
  )
};