import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

class ChatItem extends Component {

    render() {
        const {height, width} = Dimensions.get('window');
        return (
            <View style={{
                width: width * 0.7,
                marginBottom: 5
            }}>
                <View
                    style={{
                        height: 20,
                        backgroundColor: '#909090'
                    }}
                >

                </View>
                <View
                        style={{
                            padding: 5,
                            backgroundColor: '#c9c9c0',
                            minHeight: 50
                        }}
                    >
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 15
                        }}>
                            {
                                this.props.message
                            }
                        </Text>
                    </View>
            </View>
        )
    }
}

export default ChatItem;