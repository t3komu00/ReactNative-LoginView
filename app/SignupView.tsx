// SignupView.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignupView = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/LoginImage.jpeg')} style={styles.image} />
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
      </TouchableOpacity>
      
      <Text style={styles.title}>Create Account</Text>
      
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Full Name" />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP →</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.link}>Already have an account? <Text style={styles.highlight}>Sign in</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  backIcon: { marginBottom: 20, alignSelf: 'flex-start' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom:20,alignSelf: 'flex-start' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10, marginTop: 20, width: '100%' },
  input: { flex: 1, marginLeft: 10 },
  icon: { marginRight: 5 },
  button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 10, marginTop: 60, width: '70%', alignItems: 'center',alignSelf: 'flex-end' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  link: { color: 'gray', marginTop: 100 },
  highlight: { color: '#FFA500', fontWeight: 'bold' },
  image: { width: 150, height: 150, marginBottom: 20 }
});

export default SignupView;