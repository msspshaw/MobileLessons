import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// This is a default functional component - it is always a single function, with a single return.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
