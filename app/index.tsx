import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import LoginView from './LoginView';
import SignupView from './SignupView';

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLogin ? <LoginView /> : <SignupView />}
      
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue' }}>
          {isLogin ? 'Go to Sign Up' : 'Go to Log In'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;
