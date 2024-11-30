import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../../app/assets/sell-welcome.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.titleContainer}>
        <Text style={styles.sellStuff}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
        <View style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  sellStuff: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginBottom: 20,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default WelcomeScreen;