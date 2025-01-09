import React from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity,Image,ScrollView, ImageBackground,} from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreensList } from '../types';

type RegisterScreenNavigation = StackNavigationProp<ScreensList, 'Register'>;

interface RegisterProps {
  navigation: RegisterScreenNavigation;
}

const Stack = createStackNavigator<ScreensList>();

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  return (
    <ImageBackground source={require('../img/bgr.jpg')} style={styles.background} resizeMode="cover">
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://via.org.vn/datafiles/setone/1616472685_ACCESSTRADE_logo-new-2021-square-02.png' }} style={styles.logo}/>
      <Text style={styles.headerText}>Đăng Ký Tài Khoản</Text>
      <View style={styles.inputRow}>
        <TextInput style={[styles.input, { flex: 1, marginRight: 5 }]} placeholder="Họ và Tên Đệm" />
        <TextInput style={[styles.input, { flex: 1, marginLeft: 5 }]} placeholder="Tên" />
      </View>
      <TextInput style={styles.input} placeholder="email@company.com" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Điện thoại" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Nhập mã giới thiệu (nếu có)" />
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Tiếp Tục</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>Bằng việc đăng ký, bạn đã đồng ý với
        <Text style={styles.linkText}> Điều khoản dịch vụ</Text> và
        <Text style={styles.linkText}> Chính sách bảo mật</Text>.
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Đã có tài khoản? <Text style={styles.boldText}>Đăng nhập ngay</Text></Text>
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
    maxHeight: 600,
    marginTop: 150,
  },
  logo: {
    width: 200,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
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
  termsText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: 15,
  },
  linkText: {
    color: '#1d4ed8',
    textDecorationLine: 'underline',
  },
  loginText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#374151',
    marginTop: 9,
  },
  loginButton: {
    backgroundColor: 'rgba(255, 193, 49, 0.89)',
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 270,
    height: 50,
    marginRight: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
});

export default Register;
