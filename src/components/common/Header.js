import React from 'react';
import {View, Text} from 'react-native';
import {BackButton} from '../common';
import BidButton from '../parts/BidButton';
import {Actions} from 'react-native-router-flux';

const Header = (props) => {
    const {textStyle, viewStyle} = style;

    const renderBackButton = () => {
        if (props.backButton) {
            return (
                <BackButton onPress={() => props.onPress()}/>
            )
        }
    }
    const renderRightButton = () => {
        if (props.rightButton) {
            return (
                <BidButton/>
            )
        }
    }

    return (
        <View style = {viewStyle}>
            <View style={{
                flex: 2
            }}>
                {
                    renderBackButton()
                }
            </View>
            <View style={{
                flex: 16,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style = {textStyle}> {props.headerText}</Text>
            </View>
            <View style={{
                flex: 2,
            }}>
                {
                    renderRightButton()
                }
            </View>
        </View>
    )
}

const style = {
    textStyle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ddf'
    },
    viewStyle: {
        flexDirection: 'row',
        backgroundColor: '#73ADEA',

        height: 50,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: {width:5, height: 25},
        shadowOpacity: 0.9
    }
}

export {Header};
