import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  useEffect(() => {
    // Wait for 3 seconds and then navigate to the login screen
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./Ways1.png')} // Change the path to your logo image
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#250e67',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode:'contain'
  },
});

export default SplashScreen;
