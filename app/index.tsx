
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import LoginView from './StackNavExample.tsx/LoginView'; // Importing the Login component
import SignupView from './StackNavExample.tsx/SignupView';// Importing the Signup component
import _layout from './StackNavExample.tsx/_layout';
import {Link} from 'expo-router'; // Importing the Link component from Expo's router library

// Main component that handles switching between Login and Signup views
const Index = () => {
    
  {
    return (
      <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white"        
      }}
      >
         <Link href="/StackNavExample.tsx/LoginView">

      </Link> 
        {/* Uncomment the view you want to render */}
       {/* <LoginView />*/}
        {/* <SignupView /> */}
      </SafeAreaView>
    );
  };
  
}

export default Index;

  
