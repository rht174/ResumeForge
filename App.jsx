import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const headerOptions = {headerShown: false};
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
