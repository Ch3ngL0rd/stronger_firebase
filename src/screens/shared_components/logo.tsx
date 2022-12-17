import React from "react";
import { Text } from "react-native";

export default function LogoTitle() {
    return (
        <Text style={{
            fontFamily: 'Outfit_600SemiBold',
            fontSize: 30, letterSpacing: 8,
            textShadowColor: 'black', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 5,
            color: "#ffffff", textAlign: 'center', paddingHorizontal: '5%',
        }}>STRNGR</Text>
    )
}   