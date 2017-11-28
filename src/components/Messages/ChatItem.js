import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';

class ChatItem extends Component {

    render() {
        const {height, width} = Dimensions.get('window');
        return (
            <View style={[{
                flexDirection: 'row',
                alignItems: 'center'
            }, this.props.style]}>
                <View style={{
                    width: width * 0.95,
                    marginBottom: 5,
                    flexDirection: 'column'
                }}>
                    <View
                        style={{
                            height: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Image
                            style={styles.userImg}
                            source={require('../img/user.png')}
                        />
                        <View>
                            <Text style={
                                styles.nameText
                            }>
                                Вася </Text>
                        </View>
                        <View>
                            <Text>
                                {
                                    this.props.role
                                }
                            </Text>
                        </View>
                    </View>
                    <View
                            style={{
                                marginLeft:25,
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
                                    this.props.children
                                }
                            </Text>
                        </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        justifyContent: 'flex-end'
                    }}>
                        <Text style={styles.dateText}>
                            {
                                this.props.date
                            }
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    nameText: {
        fontWeight: '600',
        fontSize: 17,
        color: '#5970ff'
    },
    dateText: {
        fontWeight: '400',
        fontSize: 15,
        color: '#909087'
    },
    msgIconContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    msgIcon: {
        width: 25,
        height: 25,
    },
    userImg: {
        width: 20,
        height: 20,
    }
}

export default ChatItem;