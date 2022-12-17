import AntDesign from "@expo/vector-icons/build/AntDesign";
import Entypo from "@expo/vector-icons/build/Entypo";
import { Camera, CameraType } from "expo-camera";
import React from "react";
import { View, StyleSheet, Text, Pressable, StatusBar } from "react-native";
import { StrongerColour, StrongerSize } from "../../constants";
import LogoTitle from "../shared_components/logo";

export default function Recorder({ route, navigation }: any) {
    const [type, setType] = React.useState(CameraType.back);
    const [hasCameraPermission, setHasCameraPermission] = React.useState<boolean | undefined>(undefined);

    const [recording, setRecording] = React.useState<boolean>(false);

    let cameraRef = React.useRef<any | undefined>(undefined);


    const { prompt } = route.params;

    React.useEffect(() => {
        const getPermission = async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
        }
        getPermission();
    })

    const goBack = () => {
        navigation.goBack();
    }

    const touchRecord = async () => {
        if (recording === true) {
            await stopVideo();
        } else {
            recordVideo();
        }
    }

    const recordVideo = async () => {
        setRecording(true);
        let newVideo = await cameraRef.current?.recordAsync();
        setRecording(false);
        navigation.navigate("ChallengeSubmission", { video: newVideo.uri })
    }

    const stopVideo = async () => {
        await cameraRef.current?.stopRecording();
    }

    if (hasCameraPermission === undefined) {
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <Text style={styles.highText}>Waiting for camera permissions...</Text>
            </View>
        )
    } else if (hasCameraPermission === false) {
        return (
            <View style={[styles.container, { justifyContent: 'center' }]}>
                <Text style={[styles.highText, { marginBottom: 50, paddingHorizontal: '20%' }]}>Please enable camera permissions in settings</Text>
                <Pressable onPress={goBack}>
                    <View style={styles.button}>
                        <Text style={[styles.highText, { color: "#000" }]}>Go Back</Text>
                    </View>
                </Pressable>
            </View >
        )
    }

    return (
        <>
            <Camera
                style={styles.camera}
                type={type} ref={cameraRef} />
            <View style={styles.container}>
                <StatusBar hidden />
                <View>
                    <LogoTitle />
                    <Text style={[styles.highText, styles.textShadow]}>Record your best attempt!</Text>
                    <Text style={[styles.highText, styles.textShadow]}>{prompt}</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Pressable onPressIn={touchRecord}>
                        {recording === false ?
                            <Entypo name="circle" size={80} color="white" />
                            :
                            <AntDesign name="smile-circle" size={80} color="white" />}
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    highText: {
        fontFamily: "Outfit_400Regular",
        color: 'white',
        fontSize: StrongerSize.Normal,
        textAlign: 'center'
    },
    button: {
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
    },
    camera: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    textShadow: {
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
    }
})