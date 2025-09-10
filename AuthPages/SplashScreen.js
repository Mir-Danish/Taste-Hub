import React from "react";
import { Platform,StatusBar,StyleSheet,View,Text } from "react-native";

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create ({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0,
        justifyContent:"center",
        alignItems:"center"
    }
})