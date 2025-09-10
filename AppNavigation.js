import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./AuthPages/SplashScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigation;
