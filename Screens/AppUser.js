import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontFamily, Color } from '../GlobalStyles';

const AppUser = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dateRegistered, setDateRegistered] = useState(new Date().toDateString()); // Automatically set the current date

  const handleSubmit = () => {
    navigation.navigate('AppChoice', { name, dateRegistered });
  };  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date Registered:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDateRegistered}
          value={dateRegistered}
          editable={false} // Disable editing of the date
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorWhite,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 300,
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
  },
  button: {
    backgroundColor: '#e1705d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
  },
});

export default AppUser;
