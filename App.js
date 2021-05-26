import React, { Component } from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";


const API_KEY = "138e54b1343fd0cb3476393b767d48f2";

export default class App extends Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {main: { temp }, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async() => {
    try { // Permission 
    await Location.requestPermissionsAsync(); // 권한 요청
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync(); // 위도, 경도
    this.getWeather(latitude, longitude)
    this.setState({ isLoading: false }); 
    } catch (error) { // Error
      Alert.alert("Can't find you", "You must allow weather App to access your location");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? ( <Loading /> ) : ( <Weather temp = {Math.round(temp)} condition={condition} /> );
  }
}