import React from 'react';
import {View, Text} from 'react-native';
import {DescriptionRow} from '../parts';
import Icon from './Icon';

const ItemRow = ({icon, children}) => {
    const {topBlockContainer, topBlockIcon, topBlockDescription} = styles;
    return (
        <View style={{flex: 1}}>
            <View style={topBlockContainer}>
                <View style={topBlockIcon}>
                    <Icon icon={icon}/>
                </View>
                <View style={topBlockDescription.container}>
                    {children}
                </View>
            </View>
        </View>
    )
}



const styles = {
    topBlockContainer: {
        flex:8,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingBottom: 2,
        position: 'relative'
    },
    topBlockIcon: {
        flex:2,
        paddingLeft: 3,
        paddingRight: 8,
        justifyContent: 'center',
        // backgroundColor: '#66f82c'
    },
    topBlockDescription: {
        container: {
            flex:6,
            // backgroundColor: '#909090',
            paddingLeft: 5
        },
        text: {
            fontSize: 18,
            fontWeight: '400'
        }
    }
}
export {ItemRow};