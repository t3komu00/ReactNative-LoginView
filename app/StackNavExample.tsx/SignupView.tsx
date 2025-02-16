// SignupView.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'

// Defining the SignupView functional component
const SignupView = () => {
    return (

      <><View>
        <Text>This is Signup page</Text>
        <Link href="/StackNavExample.tsx/LoginView" style={{ color: 'blue' }}>
          <Text>Go back to Login</Text>
        </Link>
      </View>
        {/*Main container for the Signup screen*/}
        <View style={styles.container}>
          {/* Displaying an image at the top of the screen */}
         <Image source={require('../../assets/images/LoginImage.jpeg')} style={styles.image} />

          {/* Back button to navigate to the previous screen */}
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
          </TouchableOpacity>

          {/* Signup title text */}
          <View>
            <Text style={styles.title}>Create Account</Text>
          </View>

          {/* Input field for full name with an icon */}
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={20} color="gray" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Full Name" />
          </View>

          {/* Input field for email with an icon */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
          </View>

          {/* Input field for password with an icon */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          </View>

          {/* Input field for confirming password with an icon */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={20} color="gray" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
          </View>

          {/* Signup button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP →</Text>
          </TouchableOpacity>

          {/* Navigation text for signing in */}
          <TouchableOpacity>
            <Text style={styles.link}>Already have an account? <Text style={styles.highlight}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View></>
    );
  };

// Defining styles using StyleSheet
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  backIcon: { marginBottom: 20, alignSelf: 'flex-start' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom:20,alignSelf: 'flex-start' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10, marginTop: 20, width: '100%' },
  input: { flex: 1, marginLeft: 10 },
  icon: { marginRight: 5 },
  button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 80, marginTop: 10, width: '70%', alignItems: 'center', alignSelf: 'flex-end' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  link: { color: 'gray', marginTop: 10 },
  highlight: { color: '#FFA500', fontWeight: 'bold' },
  image: { width: 150, height: 150, marginTop: 10,'alignSelf': 'center' }
});

export default SignupView;