import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../Button';

export default props => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const ongologin = () => {

        props.navigation.navigate('Login', {
            userP: username,
            passP: password,
        });
    };
    const ongoregister = () => {
        props.navigation.navigate('Register')
    }

    return <View>
        <Text style={mystyles.title}>Wellcome</Text>
        <TextInput placeholder="Username" onChangeText={setUsername} />
        <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity>
            <View>
                <Text style={mystyles.buttonregin}
                    onPress={ongoregister}
                >create account</Text>
            </View>
        </TouchableOpacity>
        <Button
            onClick={ongologin}>
        </Button>

    </View>
}


const mystyles = StyleSheet.create({
    buttonregin: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 12,
        textAlign: "center",
        margin: 5,
        elevation: 10
    },
    title:{
        fontSize:30,
        color:'green',
        textAlign:'center',
    }
})

