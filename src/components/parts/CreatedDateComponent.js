import React from 'react';
import {View, Text} from 'react-native';
import {DetailsCard} from '../common';

const CreatedDateComponent = ({date}) => {
    const {textContainer, valueContainer, dateStyle, textStyle} = styles;
    return (
        <DetailsCard>
            <View style={textContainer}>
                <Text style={textStyle}>
                    Добавлено:
                </Text>
                <Text style={dateStyle}>
                    {date}
                </Text>
            </View>
            <View style={valueContainer}>

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
        flex:7,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    valueContainer:{
        flex:3
    },
    valueTextContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#050505',
        justifyContent: 'center',
        alignItems: 'center'
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

export {CreatedDateComponent};
