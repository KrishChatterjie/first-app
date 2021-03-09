import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#152238',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default App;
