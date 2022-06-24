import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import * as Fonts from 'expo-font';
import MainStack from './navigation';
import { useState } from 'react';

export default function App() {

  const [fontsState, setFontsState] = useState(false);

  if (fontsState) {
    return (
      <View style={{flex: 1}}>
        <MainStack />
        <StatusBar style="auto" />
      </View>
    );
  } else {
    (async () => {
      await Fonts.loadAsync({
        'rw-bold': require('./fonts/Raleway-Bold.ttf'),
        'rw-light': require('./fonts/Raleway-Light.ttf')
      });
      setFontsState(true);
    })();
    return <View style={{flex: 1}}>
      <Text>Загрузка</Text>
      <StatusBar style="auto" />
    </View>
  }
};
