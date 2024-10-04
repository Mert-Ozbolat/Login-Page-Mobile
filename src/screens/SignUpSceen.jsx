import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';

const SignUpSceen = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-full bg-white">
      <StatusBar barStyle="light-content" />
      <Image
        className="absolute w-full h-full"
        source={require('../../assets/Image/background.jpeg')}
      />

      <View className="flex justify-around w-full h-full pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={{color: '#E9EFEC'}}
            className="text-5xl font-bold tracking-wider text-white">
            Signup
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={{backgroundColor: '#6A9C89'}}
            className="w-full p-2 bg-black/5 rounded-2xl">
            <TextInput placeholder="Username" placeholderTextColor={'white'} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            style={{backgroundColor: '#6A9C89'}}
            className="w-full p-2 bg-black/5 rounded-2xl">
            <TextInput placeholder="E-mail" placeholderTextColor={'white'} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            style={{backgroundColor: '#6A9C89'}}
            className="w-full p-2 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'white'}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="w-full">
            <TouchableOpacity
              style={{backgroundColor: '#16423C'}}
              className="w-full p-3 mb-3 bg-sky-400 rounded-2xl">
              <Text className="text-2xl font-bold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(800).springify()}
            className="flex-row justify-center">
            <Text style={{color: '#E9EFEC', fontSize: 15}}>
              Already have an accont?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text style={{color: '#fff'}}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpSceen;
