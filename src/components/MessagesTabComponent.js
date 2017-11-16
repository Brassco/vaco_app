import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    ListView
} from "react-native";
import {connect} from 'react-redux';
import {loadingMessages} from '../actions/MessagesActions';
import {Spiner, DetailsCard, Card, Header} from './common';
import MessageItemComponent from './MessageItemComponent';


class MessagesTabComponent extends React.Component {

    /*componentWillMount(){
        const {userKey, selectedOrder} = this.props;
        this.props.loadingMessages(userKey, selectedOrder.Id);
    }*/

    componentWillMount(){
        const {userKey, selectedOrder} = this.props;
        this.props.loadingMessages(userKey, selectedOrder.Id);
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({messages}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        const questions = [];

        messages.map((msg) => {
            if(msg.ResponseToQuestionId == null) {
                questions.push(msg)
            }
        })

        this.dataSource = ds.cloneWithRows(questions)
    }

    openQuestionScreen = (msg) => {
        // this.props.selectMessage(msg)
        console.log('openQuestionScreen', msg);
        // Actions.askQuestion();
    }

    renderRow(message) {

        return (
            <MessageItemComponent
                key={message.Id}
                message={message}
            />
        )
    }

    /*renderPrices = () => {
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
                                                <TouchableWithoutFeedback onPress={this.openQuestionScreen}>
                                                    <Image
                                                        style={msgIcon}
                                                        source={require('./img/msg.png')}
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
    }*/

    renderMessages = () => {
        if (this.props.loading == false) {
            return (
                <ListView
                    enableEmptySections={true}
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)} />
            )
        } else {
            return (
                <Spiner size="large" />
            )
        }
    }

    render() {
        return (
            <Card>
                {
                    this.renderMessages()
                }
            </Card>
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

const mapStateToProps = (state) => {
    return {
        userKey: state.auth.user.access_token,
        selectedOrder: state.order.selectedOrder,
        messages: state.messages.messages,
        loading: state.messages.loading
    }
}

export default connect(mapStateToProps, {loadingMessages})(MessagesTabComponent);
