import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "4286f4"],
        title: "Thunderstorm",
        subtitle: "Actually, outside of the house."
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6EB", "#005BEA"],
        title: "Rain",
        subtitle: "For more info look outside."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "x"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FEF253", "#FF7300"],
        title: "Clear",
        subtitle: "Go get your ass burnt."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring."
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4D40B0", "#D39D38"],
        title: "Dust",
        subtitle: "You must to taking a Mask"
    }
};

export default function Weather({ temp, condition }) {
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <StatusBar style="light"/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons
                        size = {96}
                        name = {weatherOptions[condition].iconName} 
                        color = "white"/>
                    <Text style={styles.temp}>{temp}°C</Text>
                </View>
                <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
                     <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                     <Text style={styles.subtitle}>
                         {weatherOptions[condition].subtitle}
                    </Text>
                </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequierd,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle,", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10  
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 24,
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});
