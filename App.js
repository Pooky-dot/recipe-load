import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/component/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
