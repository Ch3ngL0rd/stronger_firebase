import React from "react";
import { View, StyleSheet, StatusBar, Text, Pressable, Image } from "react-native";
import { StrongerColour, StrongerSize } from "../../constants";
import LogoTitle from "../shared_components/logo";
import Viewer from "./home/viewer";
const Ching = require("./login/ching.png");


export default function Login({ navigation }: any) {

    return (
        <View style={styles.container}>
            <Image source={Ching} resizeMode="cover" style={{ width: '100%', height: '100%', position: 'absolute' }} />
            <StatusBar hidden />
            <Text style={{
                fontFamily: 'Outfit_600SemiBold',
                fontSize: 60, letterSpacing: 8,
                textShadowColor: 'black', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 5,
                color: "#ffffff", textAlign: 'center', paddingHorizontal: '5%',
            }}>STRNGR</Text>
            <Text>Challenge & Grow Together. Be Unstopabble</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: StrongerColour.Background,
    },
    highText: {
        fontFamily: "Outfit_400Regular",
        color: StrongerColour.High,
        fontSize: StrongerSize.Normal,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    tabStyle: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: StrongerColour.High,
    }
})