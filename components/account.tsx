import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Image,ScrollView, ImageBackground,} from 'react-native';

const Account = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        
    </ScrollView>
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 253, 250, 0.38)',
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
  });

export default Account;