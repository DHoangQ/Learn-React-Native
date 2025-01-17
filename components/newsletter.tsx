import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ToptabList, ScreensList } from '../types';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<ScreensList>();

const NewsScreenScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const slides = [
    { id: 1, image: require('../img/banner.jpg'), link: 'https://event.accesstrade.vn/tetmoneyfest2025' },
    { id: 2, image: require('../img/banner.jpg'), link: 'https://event.accesstrade.vn/tetmoneyfest2025' },
    { id: 3, image: require('../img/banner.jpg'), link: 'https://event.accesstrade.vn/tetmoneyfest2025' },
  ]; 

  const [events] = useState([
    {
      id: 1,
      date: '07/01/2025',
      title: 'ĐUA TOP LOTTE FINANCE - NHẬN THƯỞNG SIÊU KHỦNG',
      description: 'Vừa nhận hoa hồng lên đến 5% khi đạt mốc đơn vừa được nhận ngay bonus khủng.',
      image: 'https://hrchannels.com/Upload/employer/logo/img000000012847.PNG',
    },
    {
      id: 2,
      date: '08/01/2025',
      title: 'Ưu đãi đặc biệt năm mới',
      description: 'Nhận ưu đãi khi tham gia sự kiện Tết 2025.',
      image: 'https://hrchannels.com/Upload/employer/logo/img000000012847.PNG',
    },
    {
      id: 3,
      date: '09/01/2025',
      title: 'Ưu đãi đặc biệt năm mới',
      description: 'Nhận ưu đãi khi tham gia sự kiện Tết 2025.',
      image: 'https://hrchannels.com/Upload/employer/logo/img000000012847.PNG',
    },
    {
      id: 4,
      date: '10/01/2025',
      title: 'Ưu đãi đặc biệt năm mới',
      description: 'Nhận ưu đãi khi tham gia sự kiện Tết 2025.',
      image: 'https://hrchannels.com/Upload/employer/logo/img000000012847.PNG',
    },
  ]);

  const { width } = Dimensions.get('window');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => {
        const nextSlide = (prevSlide + 1) % slides.length;
        scrollViewRef.current?.scrollTo({ x: nextSlide * width, animated: true });
        return nextSlide;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const onScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveSlide(slideIndex);
  };

  const handleSlidePress = (link: string) => {
    Linking.openURL(link).catch((err) => console.error('loi...', err));
  };

  return (
    <ScrollView style={styles.tabScreen}>
      <View style={styles.sliderContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={1}
          ref={scrollViewRef}>
          {slides.map((slide) => (
            <TouchableOpacity key={slide.id} style={styles.slide} onPress={() => handleSlidePress(slide.link)}>
              <Image source={slide.image} style={styles.slideImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.event}>
        <Text style={styles.textsk}>Sự kiện</Text>
        {events.map((event) => (
          <TouchableOpacity key={event.id} style={styles.eventCard} onPress={() => navigation.navigate('Detailevent')}>
            <View style={styles.eventTextContainer}>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
            </View>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const SMakeScreen: React.FC = () => (
  <View style={styles.tabScreen2}>
    <Text style={styles.tabText}>2</Text>
  </View>
);

const CaseStudyScreen: React.FC = () => (
  <View style={styles.tabScreen3}>
    <Text style={styles.tabText}>3</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator<ToptabList>();

const Newsletter: React.FC<{ backgroundImage: string | null }> = ({ backgroundImage }) => {
  return (
    <ImageBackground source={backgroundImage ? { uri: backgroundImage } : undefined} style={styles.background} resizeMode="stretch">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://accesstrade.in.th/wp-content/uploads/2021/03/cropped-cropped-cropped-AccesstradeLOGO-01-1-1.png' }} style={styles.logo} />
          <Ionicons name="search-outline" size={40} color="black" style={styles.icon} />
          <Ionicons name="person-circle-outline" size={40} color="black" style={styles.icon} />
        </View>
        <View style={styles.body}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'rgba(254, 26, 26, 0.89)',
              tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.89)',
              tabBarStyle: {
                paddingBottom: 3,
                paddingTop: 3,
                backgroundColor: 'rgb(254, 144, 26)',
              },
              tabBarLabelStyle: {
                fontSize: 15,
                fontWeight: 'bold',
              },
              tabBarIndicatorStyle: {
                backgroundColor: 'rgba(254, 26, 26, 0.89)',
                width: 50,
                height: 5,
                borderRadius: 50,
                marginLeft: 50,
              },
            }}>
            <Tab.Screen name="NewsScreen" component={NewsScreenScreen} options={{ tabBarLabel: 'Tin tức' }} />
            <Tab.Screen name="SMakemoney" component={SMakeScreen} options={{ tabBarLabel: 'Học kiếm tiền' }} />
            <Tab.Screen name="CaseStudy" component={CaseStudyScreen} options={{ tabBarLabel: 'Case Study' }} />
          </Tab.Navigator>
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
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    width: 190,
    height: 70,
    marginRight: 120,
    marginLeft: 10,
  },
  icon: {
    padding: 10,
    marginRight: 10,
  },
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  tabScreen: {
    flex: 1,
    backgroundColor: 'rgba(255, 243, 224, 1)',
  },
  tabScreen2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 243, 224, 1)',
  },
  tabScreen3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 243, 224, 1)',
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sliderContainer: {
    width: '100%',
    height: 200,
    marginBottom: 7,
  },
  slide: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  event: {},
  eventDate: {
    fontSize: 14,
    color: 'rgb(255, 161, 61)',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 243, 224, 1)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    marginBottom: 1,
  },
  eventTextContainer: {
    flex: 1,
    paddingRight: 15,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: 'rgba(3, 3, 3, 0.89)',
  },
  eventImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  textsk: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Newsletter;