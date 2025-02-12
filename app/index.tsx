import React from 'react';
//import { View } from 'react-native';
import LoginView from './LoginView';
import SignupView from './SignupView';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginView />
     {/* <SignupView />*/}
    </SafeAreaView>
  );
};

export default Index;
