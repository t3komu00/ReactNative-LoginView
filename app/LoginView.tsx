// LoginView.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginView = () => {
  return (
    <View style={styles.container}>
         <Image source={require('../assets/images/LoginImage.jpeg')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue.</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      
      <TouchableOpacity style={styles.forgotButton}  onPress={() => console.log('Forgot password clicked')}>
        <Text style={styles.forgotText}>Forgot?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN →</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.link}>Don't have an account? <Text style={styles.highlight}>Sign up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, alignSelf: 'flex-start' },
    subtitle: { fontSize: 16, color: 'gray', marginBottom: 20, alignSelf: 'flex-start' },
    inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10, marginTop: 40, width: '100%' },
    input: { flex: 1, marginLeft: 10 },
    icon: { marginRight: 5 },
    forgotButton: { alignSelf: 'flex-end', marginTop: 5 },
    forgotText: { color: 'gray' },
    button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 10, marginTop: 60, width: '70%', alignItems: 'center' ,alignSelf: 'flex-end'},
    buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 ,},
    link: { color: 'gray', marginTop: 100, alignSelf: 'center', },
    highlight: { color: '#FFA500', fontWeight: 'bold' },
    image: { width: 150, height: 150, marginBottom: 20,alignSelf: 'center' }
});

export default LoginView;
