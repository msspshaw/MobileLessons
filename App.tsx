import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// This is a fat arrow function
// My preferred syntax - arrow functions do not redefine 'this' which can prevent bugs with
// confusion of what 'this' refers to at any specific point.
const App = () => {
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

export default App;
