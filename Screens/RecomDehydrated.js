import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Pressable } from 'react-native';
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import FeelingDehydrated from "../Screens/FeelingDehydrated";

const RecomDehydrated = ({ navigation }) => {
  // Define recommendations for Dehydrated Skin
  const recommendations = [
    { name: 'A hydrating facial serum', description: 'Containing hyaluronic acid to attract and retain moisture in the skin.', image: require('../Icons/hydrating_serum.png') },
    { name: 'A rich moisturizing cream', description: 'With ceramides and fatty acids to strengthen the skin barrier and prevent water loss.', image: require('../Icons/moisturizer.png') },
    { name: 'A facial mist', description: 'Infused with botanical extracts to refresh and hydrate throughout the day.', image: require('../Icons/facial_mist.png') }
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.product}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <ImageBackground source={require('../Icons/background.jpg')} style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.title}>RECOMMENDED PRODUCTS</Text>
      <Carousel
        data={recommendations}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        loop={false}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={recommendations.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactivePaginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.shadowProp]}
          onPress={() => navigation.navigate("AppHome")}
        >
          <Text style={styles.buttonText}>
            Home
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
    fontSize: FontSize.resultHeadingFont_size,
    fontFamily: FontFamily.manualeBold,
  },
  container: {
    flex:20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    margin: 20,
    marginTop: 70,
    padding: 20,
    borderRadius: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  product: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    zIndex: 1, 
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 8,
  },
  inactivePaginationDot: {
    backgroundColor: '#888',
  },
  buttonContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    borderRadius: 70,
    backgroundColor: "#e1705d",
    width: "100%",
    paddingHorizontal: 120,
    paddingVertical: 13,
  },
  buttonText: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 18,
    color: Color.colorWhite,
    textAlign: 'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});

export default RecomDehydrated;