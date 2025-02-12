import React, { useState } from 'react'; // imported to manage the current screen state (Login or Signup).
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import LoginView from './LoginView'; // Importing the Login component
import SignupView from './SignupView';// Importing the Signup component

// Main component that handles switching between Login and Signup views
const Index = () => {
    // State variable to track whether we are showing the login or signup page
  const [isLogin, setIsLogin] = useState(true);

  return (
    // SafeAreaView ensures content is displayed properly within safe screen boundaries
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> //flex: 1 → Takes up the full screen, justifyContent: 'center' → Aligns content vertically, alignItems: 'center' → Aligns content horizontally

        {/* Conditionally render either LoginView or SignupView based on isLogin state */}
      {isLogin ? <LoginView /> : <SignupView />}
      
       {/* A button that toggles between Login and Signup views when pressed */}
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue' }}>
          {isLogin ? 'Go to Sign Up' : 'Go to Log In'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;
