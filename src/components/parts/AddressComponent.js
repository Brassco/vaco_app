import React from 'react';
import {View, Text, Image} from 'react-native';
import {DetailsCard} from '../common';

const AddressComponent = ({from, to}) => {
    const {imageStyle, textContainer, valueContainer, arrowContainer, textStyle, arrowText} = styles;
    return (
        <DetailsCard >
            <View style={textContainer}>
                <Text style={textStyle}>
                    {from} - {to}
                </Text>
            </View>
            <View style={valueContainer}>
                <View>
                    <Image
                        style={imageStyle}
                        source={require('../img/arrow.png')}
                    >
                        <View style={arrowContainer}>
                            <Text style={arrowText}>
                                125
                            </Text>
                        </View>
                    </Image>
                </View>
            </View>
        </DetailsCard>
    )
}

const styles = {
    container:{
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textContainer:{
        flex:7
    },
    valueContainer: {
        flex: 3
    },
    arrowContainer: {
        height: 18,
        width: 70,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    arrowText: {
        color: '#fff',
        paddingLeft: 25,
        fontWeight: '500',
        fontSize: 15
    },
    textStyle: {
        color: '#61c9eb',
        fontWeight: '600'
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 18
    }
}

export {AddressComponent};
