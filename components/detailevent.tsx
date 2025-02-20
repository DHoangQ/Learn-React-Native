import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Image,ScrollView, ImageBackground,} from 'react-native';

const Detailevent = () => {
  return (
    <ImageBackground source={require('../img/bgr.jpg')} style={styles.background} resizeMode="cover">
    <ScrollView contentContainerStyle={styles.container}>
        <View>
            <Text>
                Status: Chưa có nội dung gì ở đây cả ................................................
            </Text>
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 253, 250, 0.38)',
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
  });

export default Detailevent;