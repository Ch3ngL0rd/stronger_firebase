import AntDesign from "@expo/vector-icons/build/AntDesign";
import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { StrongerColour, StrongerSize } from "../../../constants";
export default function Viewer({ recordChallenge }: any) {

    return (
        <View style={styles.container}>
            <View style={[styles.container, { flex: 6 }]}>
                <Text style={styles.highText}>No attempt submitted...</Text>
            </View>
            <Pressable style={{ flex: 1 }} onPress={recordChallenge}>
                <View style={styles.button}>
                    <Text style={[styles.highText, { color: '#000' }]}>Try the challenge!</Text>
                    <AntDesign name="arrowright" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highText: {
        fontFamily: "Outfit_400Regular",
        color: StrongerColour.High,
        fontSize: StrongerSize.Normal,
    },
    button: {
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
    }
})