import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Appearance, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const mainMenu = () => console.log('Main Menu');
  const handleButton = () => Alert.alert('Hello', 'MainMessage', [
    {text: 'Yes', onPress: () => console.log('Pressed Yes')},
    {text: 'Cancel', onPress: () => console.log('Pressed Cancel')}
  ]);
  return (
    <View style={styles.mainBlock}>
      <View style={styles.header}>
        <Text style={styles.h1} onPress={mainMenu}>My First App</Text>
      </View>
      <View style={styles.content}>
        <TouchableWithoutFeedback onPress={handleButton}><Text style={styles.btn}>Tap Here</Text></TouchableWithoutFeedback>
      </View>
      <View style={styles.footer}>
        <Text style={styles.author}>by Elkina Galina</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const theme = Appearance.getColorScheme()

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme === 'light' ? '#F7ECDE' : '#2C272E' 
  },
  header: {
    backgroundColor: "#00B4D8",
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: 35,
    paddingBottom: 10
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  btn: {
    backgroundColor: '#2364aE',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    minWidth: 100
  },
  footer: {
    width: '100%',
    backgroundColor: '#2364aE',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  author: {
    color: 'white',
  }
});
