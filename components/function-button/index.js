import React from "react";
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const FunctionButton = (props) => {
    return (
        <TouchableOpacity style={{...Styles.container, width: props.ButtonWidth}} onPress={() => props.ButtonAction(props.ThisFunction)}>
            <Text style={Styles.text}>{props.ThisFunction}</Text>
        </TouchableOpacity>
    );
};

//Styles of text and view components are complex. Creating styles of JS object for them.
const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: '#202020',
        borderWidth: 1,
        borderColor: '#000000',
        paddingTop: '25%',
        position: 'relative',
    },
    text: {
        fontSize: 24,
        color: '#FFFFFF',
        position: 'absolute',
        textTransform: 'uppercase',
    }
});

export default FunctionButton;