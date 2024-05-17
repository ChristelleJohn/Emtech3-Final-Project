import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, StatusBar, Alert, TouchableOpacity } from 'react-native';
import { FontFamily } from "../GlobalStyles";
import * as Location from 'expo-location';
import homeIcon from '../Icons/home.png';
import listIcon from '../Icons/list.png';
import aboutus from '../Icons/about-us.png';


const AppHome = ({ navigation}) => {
  StatusBar.setBarStyle('light-content');
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');

  const [currentDate, setCurrentDate] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  // Function to get current time
  const getCurrentTime = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      return 'morning';
    } else {
      return 'evening';
    }
  };

  // Function to get current location
  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const cityInfo = await Location.reverseGeocodeAsync({ latitude, longitude });
      const city = `${cityInfo[0].city}, ${cityInfo[0].region}`;

      return { city, latitude, longitude };
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

  // Function to fetch weather data from OpenWeather API
  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = 'f56e4fae1b09f6af126611a60279aeb5'; // Your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Get the weather description from the response
      const weatherDescription = data.weather[0].description;
      setWeatherCondition(weatherDescription); // Update state with weather description
      setTemperature((data.main.temp - 273.15).toFixed(2).toString().split('.')[0]); // Convert temperature from Kelvin to Celsius
      setHumidity(data.main.humidity);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    setCurrentCity('');
    setBackgroundImage('');

    getCurrentLocation().then(({ city, latitude, longitude }) => {
      if (city) {
        setCurrentCity(city);
        fetchWeatherData(latitude, longitude);
      }
    });

    setBackgroundImage(getCurrentTime());
  }, []);

  const getImageSource = () => {
    switch (backgroundImage) {
      case 'morning':
        return require('../Icons/Morning.png');
      default:
        return require('../Icons/Evening.png');
    }
  };

  const handlePress = () => {
    Alert.alert(
      "Quiz functionality will be implemented soon!",
      "",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("AppStart")
        }
      ]
    );
  };

  return (
    <ImageBackground source={getImageSource()} style={styles.container}>
      <View style={styles.container}>
        {/* Top Nav Bar */}
        <View style={styles.navbar1}>
          <View style={styles.dateloc}>
            <Text style={styles.navText}>{currentDate}</Text>
            <Text style={styles.city}>{currentCity}</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>{temperature}°C</Text>
          </View>
        </View>

        {/* Middle Part */}
        <View style={styles.middleContainer}>
          <Text style={styles.message}>Good {getCurrentTime()}!</Text>
          <Text style={styles.message}>How does your skin feel today?</Text>
          <Button title="Let's Find Out!" onPress={handlePress} />
        </View>

        {/* Temperature and Humidity */}
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Weather Status: {weatherCondition.toUpperCase()}</Text>
          <Text style={styles.weatherText}>Humidity: {humidity}%</Text>
        </View>
        
        <View style={styles.navbar2}>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('RecommendationsScreen')}>
          <Image source={listIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} >
          <Image source={homeIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('Settings')}>
          <Image source={aboutus} style={styles.icon} />
        </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  navbar1: {
    marginTop: 30,
    paddingTop: 30,
    width: "auto",
    marginLeft: 25,
    flexDirection: "row",
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
  city: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    marginTop: 5,
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 300,
    marginHorizontal: 45,
  },
  message: {
    fontSize: 25,
    fontFamily: FontFamily.lobsterRegular,
    marginBottom: 10,
    color: 'white',
    fontWeight: "bold",
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    padding: 10,
  },
  weatherText: {
    fontSize: 15,
    color: 'white',
    marginRight: 10,
  },
  temptext: {
    color: "white",
    textAlign: "right",
    fontSize: 40,
    marginLeft: 30,
  },
  temp: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  dateloc: {
    flexDirection: "column",
  },
  navbar2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navbarItem: {
    padding: 15,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});

export default AppHome;
