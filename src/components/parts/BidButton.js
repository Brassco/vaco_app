import React from 'react';
import {Image, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';

const BidButton = () => {
    const {buttonStyle, textStyle} = style;

    const goToBidPriceScreen = () => {
        Actions.bidPrice();
    }

    return (
        <TouchableWithoutFeedback  style={buttonStyle} onPress={goToBidPriceScreen}>
            <Image
                    style={{
                        width: 35,
                        height: 35
                    }}
                    source={require('../img/humer_blue.png')}
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
        paddingRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default BidButton;