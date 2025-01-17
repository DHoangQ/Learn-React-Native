import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground,} from 'react-native';

interface MyProps {
  name: string;
}

const Greeting: React.FC<MyProps> = ({ name }) => {
  return (
    <View>
      <Text style={styles.greetingText}>Welcome, {name}!</Text>
    </View>
  ); 
};

const Discover: React.FC<{ backgroundImage: string | null }> = ({ backgroundImage }) => {
  const [name, setName] = useState<string>('hoang');
  const [message, setMessage] = useState<string>('Click');
  const Enter = () => {
    setMessage(`${name}, welcome discover tab`);
  };
  return (
    <ImageBackground source={backgroundImage ? { uri: backgroundImage } : undefined} style={styles.background} resizeMode="stretch">
    <ScrollView contentContainerStyle={styles.container}>
      <Greeting name={name} />
      <TextInput style={styles.input} placeholder="Nhập tên" value={name} onChangeText={setName}/>
      <Text style={styles.messageText}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={Enter}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 253, 250, 0)',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  messageText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Discover;
