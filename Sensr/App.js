import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Demos from './components/Demos'
import Contact from './components/Contact'
import Cam from './components/Cam'
import Scanner from './components/Scanner'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App(props) {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
            ? 'home'
            : 'home-outline';
          } else if (route.name === 'Demos') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }
          //  else if (route.name === 'Contact') {
          //   iconName = focused ? 'mail-open' : 'mail-outline';
          // }
           else if (route.name === 'Contact') {
            iconName = focused ? 'send' : 'send-outline';
          }
          else if (route.name === 'Cam') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === 'Scanner') {
            iconName = focused ? 'scan-circle' : 'scan-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        swipeEnabled: true,
        animationEnabled: true,
        gesturesEnabled: true,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Demos" component={Demos} options={{ headerShown: false }} />
        <Tab.Screen name="Contact" component={Contact}  options={{ headerShown: false }} />
        <Tab.Screen name="Cam" component={Cam}/>
        <Tab.Screen name="Scanner" component={Scanner}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});