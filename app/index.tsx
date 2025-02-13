
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import LoginView from './LoginView'; // Importing the Login component
import SignupView from './SignupView';// Importing the Signup component

// Main component that handles switching between Login and Signup views
const Index = () => {
    
  {
    return (
      <SafeAreaView>
        {/* Uncomment the view you want to render */}
        <LoginView />
        {/* <SignupView /> */}
      </SafeAreaView>
    );
  };
  
}

export default Index;

  
