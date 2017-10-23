import React from 'react';
import {Image, View, TouchableWithoutFeedback} from 'react-native';

const BackButton = ({onPress}) => {
    const {buttonStyle, textStyle} = style;
    return (
        <TouchableWithoutFeedback  style={buttonStyle} onPress={onPress}>
            <Image
                    style={{
                        width: 35,
                        height: 35
                    }}
                    source={require('../img/backButton.png')}
                />
        </TouchableWithoutFeedback>
    )
}

const style = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export {BackButton};