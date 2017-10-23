import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    )
}

const style = {
    containerStyle: {
        flex: 1,
        elevation: 1,
        marginTop: 10
        }
    }

export {Card};