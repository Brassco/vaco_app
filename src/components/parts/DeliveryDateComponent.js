import React from 'react';
import {View, Text, Image} from 'react-native';
import {DetailsCard} from '../common';

const DeliveryDateComponent = ({date}) => {
    const {container, textContainer, valueContainer, dateStyle, textStyle} = styles;
    return (
        <DetailsCard>
            <View style={textContainer}>
                <Text style={textStyle}>
                    Дата перевозки:
                </Text>
                <Text style={dateStyle}>
                    {date}
                </Text>
            </View>
            <View style={valueContainer}>
                <Image
                    source={require('../img/humer.png')}
                />
                <Text style={{
                    paddingLeft: 4,
                    fontSize:15,
                    fontWeight: '500'
                }}>
                    1
                </Text>
            </View>
        </DetailsCard>
    )
}

const styles = {
    container:{
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textContainer:{
        flex:4,
        flexDirection: 'row',
        justifyContent: 'flex-start'
        // backgroundColor: '#579fff'
    },
    valueContainer:{
        flex:1,
        flexDirection: 'row'
    },
    textStyle: {
        color: '#a8a89f',
        fontWeight: '400',
        fontSize: 15
    },
    dateStyle: {
        fontWeight: '500',
        fontSize: 15,
        paddingLeft: 3
    }
}

export {DeliveryDateComponent};
