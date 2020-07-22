import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default props => {

    const register =()=>{
        alert("Thanks for register! good luck")
    }
    return <View>
        <Text style={myrigistyles.title}>Register account</Text>
        <TextInput placeholder="Fisrt name" />
        <TextInput placeholder="Last name" />
        <TextInput placeholder="Gender" />
        <TextInput placeholder="Username" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm Password" />
        <TouchableOpacity>
            <View>
                <Text onPress={register} style={myrigistyles.buttonregin}>Rigister</Text>
            </View>
        </TouchableOpacity>
    </View>
}

const myrigistyles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        color:'gray'
    },
    buttonregin: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 12,
        textAlign: "center",
        margin: 5,
        elevation: 10}

    })