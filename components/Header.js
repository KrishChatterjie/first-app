import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = ({highscore, time}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Highscore: {highscore}</Text>
      <Text style={styles.text}>Time: {time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#0e0e0e',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default App;
