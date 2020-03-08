import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// I am a class - high notes, I can define child functions (render is the key here)
// and I can use 'this' notation from standard javascript.
export default class App {
  public render () {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
