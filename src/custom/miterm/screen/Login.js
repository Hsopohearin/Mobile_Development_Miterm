import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default props => {

    return <View>
        <Text style={mystyle.textTile}>You are logined</Text>
        <Text style={mystyle.messageTile}>Username: {props.route.params.userP}</Text>
        <Text style={mystyle.messageTile}>Password: {props.route.params.passP}</Text>
    </View>
}

const mystyle = StyleSheet.create({
    messageTile :{
        fontSize:20,
        color:'green',
        textAlign:'center'
    },
    textTile :{
        fontSize:20,
        color:'gray',
        textAlign:'center'
    }
})

