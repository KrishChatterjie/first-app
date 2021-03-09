import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from './components/Header';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.div}>
        <Button
          title="Click Me!"
          onPress={() => setCount(count + 1)}
          color="#152238"
        />
        <Text style={styles.text}>{count} clicks!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#23395d',
    margin: 20,
    alignSelf: 'center',
  },
  div: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
