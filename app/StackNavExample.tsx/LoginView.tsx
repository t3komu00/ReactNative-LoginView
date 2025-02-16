// Importing necessary dependencies

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';  // A container component for layout
/*-Text, // For displaying text
 -TextInput, // Input field for user input
-TouchableOpacity, // Clickable button component
-StyleSheet, // For defining style
-Image // For displaying images*/
import { Ionicons } from '@expo/vector-icons'; // Importing icons from Expo's Ionicons library
import {Link} from 'expo-router'; // Importing the Link component from Expo's router library

// Defining the LoginView functional component
const LoginView = () => {
    return (

      <><View>
          <Text>This is Login page</Text>
          <Link href="/StackNavExample.tsx/SignupView" style={{ color: 'blue' }}>
             <Text>Go to Signup</Text>
          </Link>

       </View>
          {/* Main container for the Login screen*/}
          <View style={styles.container}>
             {/* Displaying an image at the top of the screen */}
            <Image source={require('../../assets/images/LoginImage.jpeg')} style={styles.image} />

             {/* Login title text */}
             <View>
                <Text style={styles.title}>Login</Text>
             </View>

             {/* Subtitle text prompting the user */}
             <View>
                <Text style={styles.subtitle}>Please sign in to continue.</Text>
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

             {/* Forgot password button (prints a message when clicked) */}
             <TouchableOpacity style={styles.forgotButton} onPress={() => console.log('Forgot password clicked')}>
                <Text style={styles.forgotText}>Forgot?</Text>
             </TouchableOpacity>

             {/* Login button */}
             <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>LOGIN →</Text>
             </TouchableOpacity>

             {/* Navigation text for signing up */}
             <TouchableOpacity>
                <Text style={styles.link}>
                   Don't have an account? <Text style={styles.highlight}>Sign up</Text>
                </Text>
             </TouchableOpacity>
          </View></>
      
    );
  };
  
// Defining styles using StyleSheet
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },// Makes the container take up the full screen width and adds padding
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, alignSelf: 'flex-start' },// Large font size for emphasis , margin at the bottom , aligns the text to the left
    subtitle: { fontSize: 16, color: 'gray', marginBottom: 20, alignSelf: 'flex-start' },
    inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10, marginTop: 40, width: '100%' },// Aligns icon and input horizontally
    input: { flex: 1, marginLeft: 10 }, // Makes input take up available space ,  Adds spacing between icon and text input
    icon: { marginRight: 5 },
    forgotButton: { alignSelf: 'flex-end', marginTop: 5 }, // Aligns the button to the right , Adds margin at the top
    forgotText: { color: 'gray' },
    button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 80, marginTop: 20, width: '100%', alignItems: 'center' ,alignSelf: 'flex-end'},
    buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 ,},
    link: { color: 'gray', marginTop: 10, alignSelf: 'center', },
    highlight: { color: '#FFA500', fontWeight: 'bold' },
    image: { width: 150, height: 150, marginBottom: 20,alignSelf: 'center' }
});

export default LoginView;
