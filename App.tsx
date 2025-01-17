import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import Newsletter from './components/newsletter';
import Discover from './components/discover';
import Job from './components/job';
import Report from './components/report';
import Account from './components/account';
import { ScreensList, BottomTabList } from './types';
import Detailevent from './components/detailevent';

const Stack = createStackNavigator<ScreensList>();
const Tab = createBottomTabNavigator<BottomTabList>();

const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ImageBackground source={require('./img/bgr.jpg')} style={styles.background} resizeMode="cover">
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.XButton} onPress={() => navigation.navigate('Tabs')}>
            <Image source={{uri: 'https://th.bing.com/th/id/R.a2a73a31d12712dcf715bce5bc5f68ae?rik=ClTWP8NmT8Yxeg&pid=ImgRaw&r=0',}}
              style={styles.XIcon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={{ paddingTop: 10, paddingBottom: 25 }}>
            <Image source={{uri: 'https://via.org.vn/datafiles/setone/1616472685_ACCESSTRADE_logo-new-2021-square-02.png',}}
              style={{ width: 200, height: 110 }}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={[styles.input, { fontSize: 16 }]} placeholder="Tên đăng nhập hoặc email" />
            <TextInput style={[styles.input, { fontSize: 16 }]} placeholder="Mật khẩu" secureTextEntry={true} />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fingerprintButton}>
              <Image source={{uri: 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-fingerprint-icon-cartoon-design-image_1183055.jpg',}}
                style={styles.fingerprintIcon}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>Hoặc đăng nhập với</Text>
          <View>
            <TouchableOpacity style={styles.googleButton}>
              <Image source={{uri: 'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',}}
                style={styles.googleIcon}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Đăng ký tài khoản</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const TabNavigator: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  useEffect(() => {
    const loadBackgroundImage = async () => {
      const savedBackgroundImage = await AsyncStorage.getItem('backgroundImage');
      if (savedBackgroundImage) {
        setBackgroundImage(savedBackgroundImage);
      }
    };
    loadBackgroundImage();
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Newsletter"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          switch (route.name) {
            case 'Newsletter':
              iconName = 'document-text-outline';
              break;
            case 'Discover':
              iconName = 'globe-outline';
              break;
            case 'Job':
              iconName = 'briefcase-outline';
              break;
            case 'Report':
              iconName = 'bar-chart-outline';
              break;
            case 'Account':
              iconName = 'person-circle-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'rgba(254, 144, 26, 0.89)',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopWidth: 1,
          paddingBottom: 7,
          paddingTop: 5,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarShowLabel: true,
        headerShown: false,
      })}>
      <Tab.Screen name="Discover">{() => <Discover backgroundImage={backgroundImage} />}</Tab.Screen>
      <Tab.Screen name="Newsletter">{() => <Newsletter backgroundImage={backgroundImage} />}</Tab.Screen>
      <Tab.Screen name="Job">{() => <Job backgroundImage={backgroundImage} />}</Tab.Screen>
      <Tab.Screen name="Report">{() => <Report backgroundImage={backgroundImage} />}</Tab.Screen>
      <Tab.Screen name="Account">{() => (<Account backgroundImage={backgroundImage} setBackgroundImage={
        async (uri: string | null) => {
            setBackgroundImage(uri);
            await AsyncStorage.setItem('backgroundImage', uri || '');
          }}/>)}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
 
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Detailevent" component={Detailevent} />
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  XButton: {
    marginTop: 30,
    marginLeft: 10,
  },
  XIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  container: {
    backgroundColor: 'rgba(255, 193, 49, 0.89)',
    padding: 20,
    borderRadius: 40,
    alignItems: 'center',
    width: '90%',
    marginLeft: 30,
    marginTop: 90,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '60%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#f00',
    fontSize: 18,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#e63946',
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 10,
    width: 170,
    height: 50,
    marginRight: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  fingerprintButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  fingerprintIcon: {
    width: 30,
    height: 30,
  },
  orText: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  googleButton: {
    marginBottom: 20,
  },
  googleIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
