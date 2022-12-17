import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import React from 'react';
import Challenge from './challenge/main';
import Profile from './profile/main';
import { StrongerColour } from '../constants';
import { authenticationInitialState, authenticationReducer } from './auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, auth } from '../firebase';
import { View, Text } from 'react-native';
import Login from './challenge/login';

const Tab = createBottomTabNavigator();

export default function MainApp() {
    const [state, dispatch] = React.useReducer(authenticationReducer, authenticationInitialState);
    React.useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // User is logged in
                dispatch({ type: "SIGN_IN" })
            } else {
                // User is not logged in
                dispatch({ type: "SIGN_OUT" });
            }
        })
    }, [])



    if (state.loading === true) {
        return (<View style={{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
            <Text>Dummy Splash Screen...</Text>
        </View>)
    }

    return (
        <NavigationContainer>
            {state.authenticated === true ?
                <Tab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: StrongerColour.High,
                        tabBarInactiveTintColor: StrongerColour.Low,
                        tabBarActiveBackgroundColor: StrongerColour.Background,
                        tabBarInactiveBackgroundColor: StrongerColour.Background,
                        headerTitleStyle: {
                            fontFamily: 'Outfit_400Regular'
                        },
                        headerShadowVisible: false,
                        tabBarShowLabel: false,
                        headerStyle: {
                            backgroundColor: StrongerColour.Background,
                            shadowColor: 'transparent',
                            elevation: 0,
                        }
                    }}>
                    <Tab.Screen name="Challenge" component={Challenge}
                        options={{
                            title: "Challenge",
                            headerShown: false,
                            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weight-lifter" size={32} color={color} />
                        }} />
                    <Tab.Screen name="Profile" component={Profile}
                        options={{
                            title: "Profile",
                            headerShown: false,
                            tabBarIcon: ({ color }) => <Ionicons name="person" size={32} color={color} />
                        }} />
                </Tab.Navigator>
                :
                <Tab.Navigator tabBar={() => null}>
                    <Tab.Screen name="Login" component={Login}
                        options={{
                            headerShown: false,
                        }} />
                </Tab.Navigator>
            }
        </NavigationContainer >
    );
}