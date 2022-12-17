import React from "react";
import { View, Image, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { StrongerColour } from "../../constants";
import LogoTitle from "../shared_components/logo";

export default function Profile() {
    return (
        <View style={{
            flex: 1,
            display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
            backgroundColor: StrongerColour.Background,
        }}>
            <LogoTitle />
            <Image style={{ height: '30%', aspectRatio: 1, width: 'auto', borderRadius: 50 }} />
            <Text style={[styles.label, { marginLeft: 0 }]}>Click to change picture</Text>
            <View style={styles.inputBox}>
                <Text style={styles.label}>Name</Text>
                <View style={styles.box}>
                    <TextInput style={styles.userInput}
                        placeholder="Update your name"
                        autoComplete="off"
                        placeholderTextColor={StrongerColour.Low}
                    />
                </View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.box}>
                    <TextInput style={styles.userInput}
                        placeholder="Change your username"
                        autoComplete="off"
                        placeholderTextColor={StrongerColour.Low}
                    />
                </View>
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.label}>Weight</Text>
                <View style={styles.box}>
                    <TextInput style={styles.userInput}
                        keyboardType="numeric"
                        placeholder="Change your weight"
                        autoComplete="off"
                        placeholderTextColor={StrongerColour.Low}
                    />
                </View>
            </View>
            <Pressable style={styles.button}>
                <Text style={[styles.label, { marginLeft: 0, marginBottom: 0, }]}>
                    Submit
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: 'white',
        fontFamily: "Outfit_500Medium",
        marginBottom: 5,
        marginLeft: 10,
    },
    inputBox: {
        width: '100%', height: '10%',
        paddingHorizontal: '5%', marginVertical: "5%",
        flex: 1, maxHeight: 50
    },
    userInput: {
        color: "#ffffff", width: '100%',
        fontSize: 16, fontFamily: 'Outfit_400Regular',
    },
    box: {
        borderRadius: 20,
        width: '100%', height: '100%',
        backgroundColor: StrongerColour.Layer,
        paddingLeft: '5%',
        display: 'flex', justifyContent: "flex-start", alignItems: 'center', flexDirection: 'row',
    },
    button: {
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        marginHorizontal: '5%', backgroundColor: StrongerColour.Layer, borderRadius: 20,
        width: 150, height: 50, marginTop: '5%'
    }
})