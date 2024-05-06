import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Modal, TouchableOpacity } from 'react-native';
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import FeelingCongested from "../Screens/FeelingCongested";

const RecomCongested = ({ navigation, route }) => {
  const { name, dateRegistered } = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);

  const handleContainerPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    // Here you can implement the redirection to the Home Screen
    // For simplicity, let's log a message instead
    console.log('Redirecting to Home Screen...');
  };

  // Define recommendations for Congested Skin
  const recommendations = [
    { name: 'A gentle exfoliating cleanser', description: 'Containing salicylic acid or glycolic acid to unclog pores and remove excess oil.', image: require('../Icons/cleanser.png') },
    { name: 'A clay mask', description: 'With ingredients like kaolin or bentonite clay to draw out impurities and reduce congestion.', image: require('../Icons/clay_mask.png') },
    { name: 'A lightweight, oil-free moisturizer', description: 'With niacinamide to regulate oil production and soothe inflammation.', image: require('../Icons/moisturizer.png') }
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
      <TouchableOpacity style={styles.container} onPress={handleContainerPress}>
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
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You will be redirected to the Home Screen</Text>
            <TouchableOpacity style={styles.okButton} onPress={(handleCloseModal) => navigation.navigate('AppHome', { name, dateRegistered })}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background to make text readable
    margin: 20,
    marginTop: 40,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  okButton: {
    backgroundColor: '#e1705d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
  },
});

export default RecomCongested;
