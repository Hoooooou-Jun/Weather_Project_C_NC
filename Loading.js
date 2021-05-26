import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

class Loading extends Component {
    render() {
        return (
                <View style = {styles.container}>
                  <StatusBar style="dark" />
                  <Text style={styles.text}>Getting the Fucking Weather</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text: {
    color: "#2c2c2c",
    fontSize: 20
  }
});

export default Loading;