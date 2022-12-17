import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import Recorder from "./recorder";
import Submission from "./submission";
// import RecordChallenge from "./challenge/recordchallenge";
// import SubmitChallenge from "./challenge/submitchallenge";

const Stack = createNativeStackNavigator();

export default function Challenge() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ChallengeHome" component={Home} />
            <Stack.Group screenOptions={{ presentation: 'fullScreenModal', }}>
                <Stack.Screen name="ChallengeRecorder" component={Recorder} />
                <Stack.Screen name="ChallengeSubmission" component={Submission} />
                {/* <Stack.Screen name="ChallengeViewer" component={SubmitChallenge} /> */}
            </Stack.Group>
        </Stack.Navigator >
    )
}