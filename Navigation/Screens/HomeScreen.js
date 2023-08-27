import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const horizontalImages = [
  { id: 1, source: require('../assets/amboli.jpg'), name: 'Amboli' },
  { id: 2, source: require('../assets/Khandala-1.jpg'), name: 'Khandala' },
  { id: 3, source: require('../assets/Lavasa.jpg'), name: 'Lavasa' },
  { id: 4, source: require('../assets/Mahabaleshwar.jpg'), name: 'Mahabaleshwar' },
  { id: 5, source: require('../assets/matheran.jpg'), name: 'Matheran' },
  // Add more images here
];

const verticalImages = [
  { id: 1, source: require('../assets/kalsubai-trek.jpg'), name: 'Kalsubai' },
  { id: 2, source: require('../assets/Nane_Ghat.jpg'), name: 'Naneghat' },
  { id: 3, source: require('../assets/torna_fort.jpg'), name: 'Torna' },
  // Add more images here
];

const ImageItem = ({ source, name }) => (
  <View style={styles.imageContainer}>
    <Image source={source} style={styles.image} />
    <Text style={styles.imageName}>{name}</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incredible Maharashtra!</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hill Stations of Maharashtra:</Text>
          <ScrollView horizontal>
            {horizontalImages.map((item) => (
              <ImageItem key={item.id} source={item.source} name={item.name} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Treks of Maharashtra:</Text>
          {verticalImages.map((item) => (
            <ImageItem key={item.id} source={item.source} name={item.name} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    paddingBottom: 10,
    textAlign: 'center',
    color: 'black'
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    paddingBottom: 5,
    paddingLeft: 5,
    color: 'black'
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: screenWidth - 40, // Adjusted width to fit within the screen
    height: 200,
    resizeMode: 'cover',
  },
  imageName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
