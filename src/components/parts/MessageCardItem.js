import React from 'react';
import {View, Text} from 'react-native';

const MessageCardItem = (props) => {

    const {itemStyle} = styles;
    return (
        <View style={itemStyle}>
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
export default MessageCardItem;