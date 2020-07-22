import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const OPACITY = {
    BLUE: 0.4,
    NORMAL: 1
}

export default props => {
    const [opacity, setOpacity] = useState(1);
    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View
                onTouchStart={() => setOpacity(OPACITY.BLUE)}
                onTouchEnd={() => setOpacity(OPACITY.NORMAL)}
                style={StyleSheet.flatten([styles.button,props.style, { opacity }])}>
                  <Text>Login</Text>
            </View>
        </TouchableWithoutFeedback>);
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 12,
            alignItems: "center",
            margin: 5,
            elevation: 10
        }
    }
)