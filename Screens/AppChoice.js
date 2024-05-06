import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontFamily, Color } from '../GlobalStyles';
import AppUser from '../Screens/AppUser';

const AppChoice = ({ navigation, route }) => {
  const { name, dateRegistered } = route.params || {};
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>What is your skin condition? Start Quiz to know your skin condition</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.startQuizButton]}
          onPress={() => navigation.navigate('AppStart')}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.alreadyKnowButton]}
          onPress={() => navigation.navigate('Result1', { name, dateRegistered })}
        >
          <Text style={styles.buttonText}>Already Know Yours?</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.colorWhite,
  },
  questionContainer: {
    marginBottom: 30,
  },
  questionText: {
    fontSize: 24,
    fontFamily: FontFamily.interBold,
    textAlign: 'center',
    color: Color.colorSlategray
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 70,
    width: 250,
    marginBottom: 20,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startQuizButton: {
    backgroundColor: '#e1705d',
  },
  alreadyKnowButton: {
    backgroundColor: '#e1705d',
  },
  buttonText: {
    fontFamily: FontFamily.interBold,
    fontSize: 18,
    color: Color.colorWhite,
  },
});

export default AppChoice;
