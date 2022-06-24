import { StyleSheet, View, Appearance, Text } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

const theme = Appearance.getColorScheme()

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme === 'light' ? '#F7ECDE' : '#2C272E'
  },
});
