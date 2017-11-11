import React from 'react';
import { Text, View, Image} from "react-native";
import {connect} from 'react-redux';
import {loadingMessages} from '../actions/MessagesActions';
import {Spiner, DetailsCard} from './common';
import MessageCard from './parts/MessageCard';
import MessageCardItem from './parts/MessageCardItem';


class MessagesTabComponent extends React.Component {

    componentWillMount(){
        const {userKey, selectedOrder} = this.props;
        this.props.loadingMessages(userKey, selectedOrder.Id);
    }

    renderPrices = () => {
        const {
            headerContainerText,
            dateText,
            messageText,
            boldText,
            msgIconContainer,
            msgIcon,
            userImg
        } = styles;

        if (this.props.loading == false) {

            if (this.props.messages.length > 0) {
            return (
                <View style={{flex: 1}}>
                    {
                        this.props.messages.map((message) => {
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
                                                source={require('./img/user.png')}
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
                                                <Image
                                                    style={msgIcon}
                                                    source={require('./img/msg.png')}
                                                />
                                                <Text style={boldText}>
                                                    0
                                                </Text>
                                            </View>
                                        </View>
                                    </MessageCardItem>
                                </MessageCard>
                            )
                        })
                    }
                </View>
            ) } else {
                return (
                    <View style={{flex: 1}}>
                        <Text>
                            Здесь еще нет сообщений
                        </Text>
                    </View>
                )
            }
        } else {
            return (
                <Spiner size="large" />
            )
        }
    }

    render() {
        return this.renderPrices()
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

const mapStateToProps = (state) => {
    return {
        userKey: state.auth.user.access_token,
        selectedOrder: state.order.selectedOrder,
        messages: state.messages.messages,
        loading: state.messages.loading
    }
}

export default connect(mapStateToProps, {loadingMessages})(MessagesTabComponent);
