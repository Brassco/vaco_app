import React from 'react';
import {View, Platform} from 'react-native';

const Card = (props) => {
    return (
        <View style={[style.containerStyle, props.style]}>
            {props.children}
        </View>
    )
}

const style = {
    containerStyle: {
        flex: 1,
        elevation: 1,
        marginTop: (Platform.OS === 'ios') ? 20 : 1
        }
    }

export {Card};