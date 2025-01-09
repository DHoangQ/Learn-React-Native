import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Image,ScrollView, ImageBackground,} from 'react-native';

const ForgotPassword = () => {
  return (
    <ImageBackground source={require('../img/bgr.jpg')} style={styles.background} resizeMode="cover">
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://via.org.vn/datafiles/setone/1616472685_ACCESSTRADE_logo-new-2021-square-02.png' }} style={styles.logo}/>
      <Text style={styles.headerText}>Quên Mật Khẩu</Text>
      <Text style={styles.Text}>Vui lòng nhập địa chỉ email đã đăng ký của bạn bên dưới để đặt lại mật khẩu</Text>
      <TextInput style={styles.input} placeholder="email@company.com" keyboardType="email-address" />
      <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Tiếp Tục</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 193, 49, 0.66)',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 12,
    maxWidth: 400,
    maxHeight: 450,
    marginTop: 150,
  },
  logo: {
    width: 200,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    marginBottom: 15,
    color: '#000',
  },
  Text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: '#f97316',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
