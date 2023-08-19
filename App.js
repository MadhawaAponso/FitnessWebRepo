import React from 'react'
import login from './screens/login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/spalshscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

const stack = createStackNavigator();
function App(){
    return( 
       <stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
            <stack.Screen name="Splash" component={SplashScreen}/>
            <stack.Screen name ="login" component={login}/>
        </stack.Navigator>

    )

}
export default() =>{
    return(
        // <SafeAreaProvider>
            <NavigationContainer>
                <App/>
            </NavigationContainer>
        // </SafeAreaProvider>
    )
}