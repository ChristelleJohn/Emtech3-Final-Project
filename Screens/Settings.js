import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Switch, Text, StatusBar } from 'react-native';
import { FontFamily, Color } from '../GlobalStyles';

const Settings = () => {

  return (
    <View style={styles.container}>
      <View style={styles.aboutusContainer}>
        <Text style={styles.aboutusHeading}>About Us</Text>
        <Text style={styles.aboutusText}>
          Team 7! Ready at your Skin Service. We value your feedback to improve our mobile application.
          Thank you for your cooperation.
        </Text>
      </View>
      <View style={styles.Version}>
        <Text style={styles.aboutusHeading}>Version 0.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutusContainer: {
    flex: 20,
    alignItems: 'center',
    marginTop: 200,
  },
  aboutusHeading: {
    fontSize: 24,
    fontFamily: FontFamily.interBold,
  },
  aboutusText: {
    fontSize: 18,
    fontFamily: FontFamily.interRegular,
    paddingTop: 15,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  Version: {
    flex: 5,
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
  }
});

export default Settings;
