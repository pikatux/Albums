import React from 'react';
import { TouchableOpacity, Text  } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={console.log('pressed')} style={buttonStyle}>
            <Text style={textStyle}>
                Click me !!!
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#1abc9c',
        borderRadius: 5,

        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;