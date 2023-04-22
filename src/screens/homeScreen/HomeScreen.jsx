import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Welcome</Text>
      <Text>Choose a template now or chose later</Text>
    </View>
  );
};

export default HomeScreen;
