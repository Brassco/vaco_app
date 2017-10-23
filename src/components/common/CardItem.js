import React from 'react';
import {View} from 'react-native';

const CardItem = (props) => {

    const {itemStyle} = styles;
    return (
        <View style={[itemStyle, props.style]} >
            { props.children }
        </View>
    )
}

const styles = {
    itemStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}
export {CardItem};