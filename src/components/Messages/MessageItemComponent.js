import React, {Component} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import MessageCard from '../parts/MessageCard';
import MessageCardItem from '../parts/MessageCardItem';
import {selectMessage} from '../../actions/MessagesActions';
import {Actions} from 'react-native-router-flux';

class MessageItemComponent extends Component {

    openQuestionScreen = (msg) => {
        this.props.selectMessage(msg)
        Actions.askQuestion();
    }

    render() {
        const {
            headerContainerText,
            dateText,
            messageText,
            boldText,
            msgIconContainer,
            msgIcon,
            userImg
        } = styles;
        const message = this.props.message;
        return (
            <MessageCard key={message.Id}>
                <MessageCardItem>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <Image
                            style={userImg}
                            source={require('../img/user.png')}
                        />
                    </View>
                    <View
                        style={{
                            flex: 3
                        }}
                    >
                        <Text style={headerContainerText}>
                            Иван
                        </Text>
                    </View>
                    <View style={{
                        flex: 2
                    }}
                    >
                        <Text style={dateText}>
                            {
                                message.DateTime
                            }
                        </Text>
                    </View>
                </MessageCardItem>
                <MessageCardItem>
                    <Text style={messageText}>
                        {message.Text}
                    </Text>
                </MessageCardItem>
                <MessageCardItem>
                    <View style={msgIconContainer}>
                        <View style={{flexDirection: 'row', width: 40}}>
                            <TouchableWithoutFeedback onPress={() => this.openQuestionScreen(message)}>
                                <Image
                                    style={msgIcon}
                                    source={require('../img/msg.png')}
                                />
                            </TouchableWithoutFeedback>
                            <Text style={boldText}>
                                0
                            </Text>
                        </View>
                    </View>
                </MessageCardItem>
            </MessageCard>
        )
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'column'
    },
    headerContainerStyle: {
        flex: 10,
        flexDirection: 'row'
    },
    headerContainerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#579fff'
    },
    dateText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#bcbcb3'
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#6a6a6a'
    },
    boldText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#1d1d1d'
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
        width: 30,
        height: 30,
    }
}

export default connect(null,{selectMessage})(MessageItemComponent);