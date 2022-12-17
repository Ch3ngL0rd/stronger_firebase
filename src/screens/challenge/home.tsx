import React from "react";
import { View, StyleSheet, StatusBar, Text, Pressable } from "react-native";
import { StrongerColour, StrongerSize } from "../../constants";
import LogoTitle from "../shared_components/logo";
import Viewer from "./home/viewer";

enum TabType {
    You,
    Best,
    Recent
}

export default function Home({ navigation }: any) {
    const [tab, setTab] = React.useState<TabType>(TabType.You);
    const current_week: string = "8";
    const challenge: string = "Get the highest one rep max on the bench press";

    const navigateToRecorder = () => {
        navigation.navigate("ChallengeRecorder", { prompt: challenge })
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <LogoTitle />

            <View style={{ paddingHorizontal: "5%" }}>
                <Text style={styles.highText}>Week {current_week}</Text>
                <Text style={styles.highText}>Challenge: {challenge}</Text>
            </View>

            <View style={[styles.tabContainer, { marginTop: 15 }]}>
                <Pressable style={[styles.tabStyle, { opacity: tab === TabType.You ? 1 : 0.60 }]}
                    onPress={() => setTab(TabType.You)}>
                    <Text style={[styles.highText, { textAlign: 'center' }]}>You</Text>
                </Pressable>
                <Pressable style={[styles.tabStyle, { opacity: tab === TabType.Best ? 1 : 0.60 }]}
                    onPress={() => setTab(TabType.Best)}>
                    <Text style={[styles.highText, { textAlign: 'center' }]}>Best</Text>
                </Pressable>
                <Pressable style={[styles.tabStyle, { opacity: tab === TabType.Recent ? 1 : 0.60 }]}
                    onPress={() => setTab(TabType.Recent)}>
                    <Text style={[styles.highText, { textAlign: 'center' }]}>Recent</Text>
                </Pressable>
            </View>
            {
                tab === TabType.You
                    ?
                    <Viewer recordChallenge={navigateToRecorder} />
                    :
                    tab === TabType.Best
                        ?
                        <Text>Best</Text>
                        :
                        <Text>Recent</Text>
            }
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