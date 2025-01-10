import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Discover = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const loadBackgroundImage = async () => {
      const savedImage = await AsyncStorage.getItem('backgroundImage');
      if (savedImage) {
        setBackgroundImage(savedImage);
      }
    };

    loadBackgroundImage();
  }, []);

  const selectImage = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      async (response) => {
        if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
          const uri = response.assets[0].uri;
          await AsyncStorage.setItem('backgroundImage', uri);
          setBackgroundImage(uri);
        } else {
          setBackgroundImage(null);
        }
      }
    );
  };
  return (
    <ImageBackground
      source={backgroundImage ? { uri: backgroundImage } : require('../')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Chọn Background</Text>
        <TouchableOpacity style={styles.button} onPress={selectImage}>
          <Text style={styles.buttonText}>Chọn ảnh</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'rgb(249, 76, 2)',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgb(249, 76, 2)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Discover;
