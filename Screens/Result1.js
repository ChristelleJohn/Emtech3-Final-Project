import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList } from 'react-native';

// Import icon images
import homeIcon from '../Icons/home.png';
import listIcon from '../Icons/list.png';
import settingsIcon from '../Icons/settings.png';

// Sample data for products
const products = [
  { id: '1', name: 'Product 1' },
  { id: '2', name: 'Product 2' },
  { id: '3', name: 'Product 3' },
  { id: '4', name: 'Product 4' }, // New product
];

// Sample data for nested cards
const nestedCards = [
  { id: '1', name: 'Nested Product 1' },
  { id: '2', name: 'Nested Product 2' },
  { id: '3', name: 'Nested Product 3' },
];

// Card component for nested products
const NestedProductCard = ({ product }) => {
  return (
    <View style={styles.nestedCard}>
      <Text style={styles.productName}>{product.name}</Text>
    </View>
  );
};

// Card component for product
const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{product.name}</Text>
      <FlatList
        data={nestedCards}
        renderItem={({ item }) => <NestedProductCard product={item} />}
        keyExtractor={item => item.id}
        horizontal={true} // Set to true for horizontal scrolling
      />
    </View>
  );
};

export default function Result1({navigation , route }) {
  const { name, dateRegistered } = route.params || {};
  return (
    <View style={styles.container}>
      <View style={styles.navbarTop}>
        <Text style={styles.recommendedText}>Recommended Products</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('List')}>
          <Image source={listIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('AppHome')}>
          <Image source={homeIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarItem} onPress={() => navigation.navigate('Settings', { name, dateRegistered })}>
          <Image source={settingsIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbarTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 25,
  },
  recommendedText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f5f5f5',
    width: '90%',
    padding: 20,
    paddingBottom: 120,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nestedCard: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatListContent: {
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navbarItem: {
    padding: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
});