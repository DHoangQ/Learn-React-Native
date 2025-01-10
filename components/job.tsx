import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ToptabList } from '../types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator<ToptabList>();

const Foryou: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>1</Text>
  </View>
);

const MobileApp: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>2</Text>
  </View>
);

const Ecommerce: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>3</Text>
  </View>
);

const KocKol: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>4</Text>
  </View>
);

const Food: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>5</Text>
  </View>
);

const Service: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>6</Text>
  </View>
);

const Entertainment: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>7</Text>
  </View>
);

const Travel: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>8</Text>
  </View>
);

const Game: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>9</Text>
  </View>
);

const OnlineService: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>10</Text>
  </View>
);

const Education: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>11</Text>
  </View>
);

const Realestate: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>12</Text>
  </View>
);

const Beautify: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>13</Text>
  </View>
);

const Telecommunications: React.FC = () => (
  <View style={styles.tabScreen}>
    <Text style={styles.tabText}>14</Text>
  </View>
);

const Job = () => {
  return (
    <ImageBackground source={require('../img/bgr2.jpg')} style={styles.background} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Ionicons name="search-outline" size={20} color={'rgb(222, 214, 214)'} style={styles.searchIcon} />
            <TextInput style={styles.searchBar} placeholder="Search..."/>
          </View>
          <Ionicons name="person-circle-outline" size={50} color="white" style={styles.icon} />
        </View>
        <View style={styles.body}>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'rgba(254, 26, 26, 0.89)',
              tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
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
                backgroundColor: 'red',
                width: 50,
                height: 5,
                borderRadius: 50,
                marginLeft: 50
              },
              tabBarScrollEnabled: true,
            }}>
            <Tab.Screen name="Foryou" component={Foryou} options={{ tabBarLabel: 'Dành cho bạn' }} />
            <Tab.Screen name="MobileApp" component={MobileApp} options={{ tabBarLabel: 'Mobile App' }} />
            <Tab.Screen name="Ecommerce" component={Ecommerce} options={{ tabBarLabel: 'TMĐT' }} />
            <Tab.Screen name="KocKol" component={KocKol} options={{ tabBarLabel: 'KOL/KOC' }} />
            <Tab.Screen name="Food" component={Food} options={{ tabBarLabel: 'Thực phẩm' }} />
            <Tab.Screen name="Service" component={Service} options={{ tabBarLabel: 'Tài chính' }} />
            <Tab.Screen name="Entertainment" component={Entertainment} options={{ tabBarLabel: 'Giải trí' }} />
            <Tab.Screen name="Travel" component={Travel} options={{ tabBarLabel: 'Du lịch' }} />
            <Tab.Screen name="Game" component={Game} options={{ tabBarLabel: 'Game' }} />
            <Tab.Screen name="OnlineService" component={OnlineService} options={{ tabBarLabel: 'Dịch vụ' }} />
            <Tab.Screen name="Education" component={Education} options={{ tabBarLabel: 'Giáo dục' }} />
            <Tab.Screen name="Realestate" component={Realestate} options={{ tabBarLabel: 'BĐS' }} />
            <Tab.Screen name="Beautify" component={Beautify} options={{ tabBarLabel: 'Làm đẹp' }} />
            <Tab.Screen name="Telecommunications" component={Telecommunications} options={{ tabBarLabel: 'Viễn thông' }} />
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
  body: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  tabScreen: {
    flex: 1,
    backgroundColor: 'rgba(255, 243, 224, 1)',
  },
});

export default Job;
