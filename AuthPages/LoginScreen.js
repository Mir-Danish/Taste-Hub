import { View, Text, Platform, StatusBar,StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={{width:155,height:75,marginTop:30,marginHorizontal:16}}> 
           <Text style={{fontSize:35,fontWeight:600,fontFamily:"Inter"}}>Hello</Text>
           <Text style={{fontSize:16,fontWeight:500,fontFamily:"Inter"}}>Welcome Back</Text>
        </View>
      
      <View style={{marginTop:50,marginHorizontal:20}}>
        <Text style={{fontFamily:"Inter"}}>Email</Text>
        <TextInput
        placeholder='enetr your email'
        style={{height:45,marginTop:10, borderWidth:1,borderRadius:15,padding:5}}/>
      </View>

       <View style={{marginTop:45,marginHorizontal:20,}}>
        <Text style={{fontFamily:"Inter"}}>Password</Text>
        <TextInput
        placeholder='enetr your email'
        style={{height:45, marginTop:10, borderWidth:1,borderRadius:15,padding:5}}/>

        <Text style={{marginTop:20,fontFamily:"Inter"}}>Forgot Password</Text>
      </View>

     
      <TouchableOpacity style={{justifyContent:"center",alignItems:"center",width:315,height:65,backgroundColor:"#087e0dff",marginHorizontal:'40',marginTop:20,borderRadius:10}} onPress={()=>console.log("Pressed")}>
        <Text style={{fontSize:22,fontFamily:"Inter",color:"white"}}>Sign In</Text>
      </TouchableOpacity>

      <Text style={{textAlign:"center",fontFamily:"Inter",fontSize:16,marginTop:20}}>Don't have an account?{" "}<Text style={{fontFamily:"Inter"}}>SignUp</Text></Text>

    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0
  }
})