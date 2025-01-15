import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

type AccountProps = {
  backgroundImage: string | null;
  setBackgroundImage: (uri: string | null) => void;
};

const Account: React.FC<AccountProps> = ({ backgroundImage, setBackgroundImage }) => {
  const selectImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setBackgroundImage(response.assets[0].uri || null);
        }
      }
    );
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={backgroundImage ? { uri: backgroundImage } : undefined} style={[styles.background]} resizeMode="stretch">
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Background</Text>
          <TouchableOpacity style={styles.button} onPress={selectImage}>
            <Text style={styles.buttonText}>Đổi Background</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Account;
