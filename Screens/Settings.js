import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Switch, Text, StatusBar } from 'react-native';
import { FontFamily, Color } from '../GlobalStyles';

const Settings = ({route}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('Press the switch!');
  const { name, dateRegistered } = route.params || {}; 

  useEffect(() => {
    if (name && dateRegistered) {
      setUser({ name, dateRegistered });
    }
  }, [name, dateRegistered]);

  const [user, setUser] = useState({ name: '', dateRegistered: '' });

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setText(isEnabled ? 'Active' : 'Inactive');
  };

  const containerStyle = isEnabled ? styles.darkContainer : styles.lightContainer;
  const textStyle = isEnabled ? styles.darkText : styles.lightText;
  const statusBarStyle = isEnabled ? 'light-content' : 'dark-content';

  return (
    <View style={[styles.settingsContainer, containerStyle]}>
      <StatusBar backgroundColor={isEnabled ? '#222121' : '#fff'} barStyle={statusBarStyle} />
      <View style={styles.userContainer}>
        <Text style={[styles.userHeading, textStyle]}>User</Text>
        <View style={[styles.userTextContainer, containerStyle]}>
          <Text style={[styles.userText, textStyle]}>Name: {user.name}</Text>
          <Text style={[styles.userText, textStyle]}>Registered On: {user.dateRegistered}</Text>
        </View>
      </View>
      <View style={styles.themeContainer}>
        <Text style={[styles.themeHeading, textStyle]}>Theme</Text>
        <View style={styles.switchContainer}>
          <Text style={[styles.switchText, textStyle]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: 'grey', true: 'grey' }}
            thumbColor={isEnabled ? '#e1705d' : '#e1705d'}
            value={isEnabled}
            onValueChange={toggleSwitch}
          />
        </View>
      </View>
      <View style={styles.aboutusContainer}>
        <Text style={[styles.aboutusHeading, textStyle]}>About Us</Text>
        <Text style={[styles.aboutusText, textStyle]}>
          Team Katokayo! Ready at your Skin Service. We value your feedback to improve our mobile application.
          Thank you for your cooperation.
        </Text>
      </View>
      <View style={[styles.Version, textStyle]}>
        <Text style={[styles.aboutusHeading, textStyle]}>Version 0.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  userContainer: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  userHeading: {
    fontSize: 16,
    fontFamily: FontFamily.interBold,
  },
  userTextContainer: {
    alignItems: 'flex-start',
  },
  userText: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
  },
  themeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  themeHeading: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: FontFamily.interBold,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'stretch',
  },
  switchText: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
  },
  aboutusContainer: {
    flex: 2,
    alignItems: 'center',
  },
  aboutusHeading: {
    fontSize: 16,
    fontFamily: FontFamily.interBold,
  },
  aboutusText: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    paddingTop: 15,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  Version: {
    flex: 1,
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
  }
});

export default Settings;
