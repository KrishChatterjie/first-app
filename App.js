import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from './components/Header';

const App = () => {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(15);
  const [random, setRandom] = useState(Math.floor(Math.random() * 10));

  const STORAGE_KEY = '@save_highscore';

  const readData = async () => {
    try {
      let high = await AsyncStorage.getItem(STORAGE_KEY);
      high = parseInt(high, 10);
      if (high !== null) {
        setHighscore(high);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const reset = () => {
    setScore(0);
    setCount(0);
    setTime(15);
    setRandom(Math.floor(Math.random() * 10));
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(time - 1);
      if (time === 0) {
        setTime(0);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [time, score, highscore]);

  useEffect(() => {
    if (time === 0 || time === 15) {
      if (score > highscore) {
        setHighscore(score);
        const saveData = async () => {
          try {
            await AsyncStorage.setItem(STORAGE_KEY, score.toString());
          } catch (e) {
            console.log(e);
          }
        };
        saveData();
      }
      readData();
    }
  }, [setHighscore, highscore, score, time]);

  useEffect(() => {
    if (count === random) {
      setRandom(Math.floor(Math.random() * 10));
      setScore(score + 1);
    }
  }, [count, random, score]);

  return (
    <View style={styles.container}>
      <Header highscore={highscore} time={time} />
      <Text style={styles.text}>Need to reach: {random}</Text>
      <Text style={styles.text}>Current: {count}</Text>
      <View style={styles.buttonDiv}>
        <Pressable
          disabled={time === 0}
          style={() => [
            styles.button,
            {
              backgroundColor: time !== 0 ? '#05b041' : 'lightgrey',
            },
          ]}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable
          disabled={time === 0}
          style={() => [
            styles.button,
            {
              backgroundColor: time !== 0 ? '#ad0e05' : 'lightgrey',
            },
          ]}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
      <Text style={styles.buttonText}>Score: {score}</Text>
      <Button title="Reset" onPress={reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0e0e0e',
    margin: 20,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  buttonDiv: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 0.35,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    margin: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default App;
