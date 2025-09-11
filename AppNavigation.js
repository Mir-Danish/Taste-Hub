import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./AuthPages/SplashScreen";
import LoginScreen from "./AuthPages/LoginScreen";
import SignupScreen from "./AuthPages/SignupScreen"
import HomeScreen from "./pages/HomeScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator();
const LoginNavigator = () =>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginPage" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignupPage" component={SignupScreen} options={{headerShown:false}} />
    </Stack.Navigator>
    )
}


const Pages = createNativeStackNavigator();
const LoggedNavigator = ()=>{
    return(
        <Pages.Navigator>
            <Pages.Screen name="HomePage" component={HomeScreen} options={{
                headerShown:false
            }}/>
        </Pages.Navigator>
    )
}

const AppNavigation = () => {
    const [loggedIn,setLoggedIn] = useState(true)
    return(
        <NavigationContainer>
            {
                loggedIn ? <LoggedNavigator/> : <LoginNavigator />
            }
        </NavigationContainer>
    )
}


export default AppNavigation;
