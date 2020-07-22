import React, { useState } from 'react';
import { Text, View,TextInput} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Login from '../screen/Login';
import Home from '../screen/Home';
import Register from '../screen/Register';
const Stack = createStackNavigator();

export default ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}