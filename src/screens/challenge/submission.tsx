import { EvilIcons, Feather } from "@expo/vector-icons";
import { Video } from "expo-av";
import React from "react";
import {
    Keyboard, KeyboardAvoidingView, Platform, Text,
    TouchableWithoutFeedback, StyleSheet, StatusBar, Dimensions, View, TextInput, Pressable
} from "react-native";
import { StrongerColour, StrongerSize } from "../../constants";
import LogoTitle from "../shared_components/logo";

export default function Submission({ route, navigation }: any) {
    const { video } = route.params;
    const [loading, setLoading] = React.useState<boolean>(false);

    const submitVideo = () => {
        setLoading(true);
        // firebase submit
        setLoading(false);
        navigation.navigate("ChallengeHome");
    }

    const screenHeight = Dimensions.get("screen").height;
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar hidden />
                    <LogoTitle />
                    <Video
                        style={[styles.video, { height: '65%', marginBottom: 20 }]}
                        source={{ uri: video }}
                        shouldPlay={true}
                        isLooping={true} />
                    <Text style={styles.highText}>How'd you go?</Text>
                    <View style={[styles.flexRow, styles.borderBottom, { minWidth: 150, marginBottom: 20 }]}>
                        <TextInput
                            placeholder="10"
                            style={styles.highText}
                            keyboardType="numeric"
                            maxLength={6}
                        />
                        <Text style={styles.highText}>kg</Text>
                    </View>
                    <View style={[styles.flexCenter,
                    { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }]}>
                        <Pressable style={styles.flexCenter} onPress={() => navigation.goBack()}>
                            <Text style={styles.highText}>Redo</Text>
                            <EvilIcons name="redo" size={40} color="white" />
                        </Pressable>
                        <Pressable style={styles.flexCenter}
                            onPress={submitVideo}>
                            <Text style={styles.highText}>Submit</Text>
                            <Feather name="arrow-right" size={40} color="white" />
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: StrongerColour.Background,
        paddingTop: 10,
    },
    highText: {
        fontFamily: "Outfit_400Regular",
        color: StrongerColour.High,
        fontSize: StrongerSize.Big,
    },
    button: {
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
    },
    video: {
        aspectRatio: 3 / 4,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderBottom: {
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})