import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Job = () => {
  return (
    <ImageBackground source={require('../img/bgr.jpg')} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color={'rgb(222, 214, 214)'} style={styles.searchIcon} />
            <TextInput style={styles.searchBar} placeholder="Search..."/>
          </View>
          <Ionicons name="person-circle-outline" size={50} color="white" style={styles.icon} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 25,
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 5,
  },
  icon: {
    marginLeft: 25,
  },
});

export default Job;
