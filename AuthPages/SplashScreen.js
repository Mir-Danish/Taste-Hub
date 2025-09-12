import { useNavigation } from "@react-navigation/native";
import React, { cloneElement, use } from "react";
import { Platform,StatusBar,StyleSheet,View,Text, TouchableOpacity,ImageBackground} from "react-native";


const SplashScreen = () => {
    const navigation = useNavigation();
    return(
        // <View style={styles.container}>
            <ImageBackground source={{uri: "https://cdn.pixabay.com/photo/2020/01/04/17/24/cupcake-4741210_640.jpg"}} style={{flex:1,justifyContent:"space-around",alignItems:"center",width:"100%",height:"100%"}}>
                
            <View>
                <View style={{width:243,height:164}}>
                    <Text style={{textAlign:"center",fontSize:50,fontWeight:500}}>Get Cooking</Text>
                </View>
                
                 <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("LoginPage")}>
                <Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>Start Cooking</Text>
            </TouchableOpacity>
            </View>
            
            </ImageBackground>
        // </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create ({
    container:{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0,
        // justifyContent:"center",
        // alignItems:"center"
    },
    button:{
        backgroundColor:"#025807ff",
        width:243,
        height:54,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        padding:10,
        borderRadius:5
    }
})