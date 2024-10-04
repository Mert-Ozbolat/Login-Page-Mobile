import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import LoginScreen from '../screens/LoginScreen';
import SignUpSceen from '../screens/SignUpSceen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpSceen} />
    </Stack.Navigator>
  );
};

export default Router;
