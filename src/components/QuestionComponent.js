import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Dimensions,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {sendMessage, onChangeMsg } from '../actions/MessagesActions';
import ChatItem from './ChatItem';
import {Card, Header,CardItem, Spiner} from './common';
import InputMessageComponent from './InputMessageComponent';
import moment from 'moment';


class QuestionComponent extends Component {

    goBack = () => {
        // this.props.backToList();
        Actions.pop();
    }

    sendMessage = () => {
        // this.props.sendMessage(this.props.msg);
        const msgObj = {
            authorId: 1,
            assingmentId: this.props.selectedOrder.Id,
            text: this.props.msg,
            dateTime: moment().format(),
            responseToQuestionId: this.props.selectedMsg.Id
        }
        console.log('send msg', msgObj);
    }

    onChangeMessage = (msg) => {
        this.props.onChangeMsg(msg);
        console.log('change msg', msg)
    }

    renderQuestion = (question) => {
        return (
            <ChatItem message={'question.Text'} style={{justifyContent: 'flex-start', paddingLeft: 15}}/>
        )
    }

    renderAnswer = (questionId) => {
        // console.log(this.props.messages, questionId, this.props.selectedMsg)
        var answer = true;
        // this.props.messages.map((msg) => {
        //     if (msg.ResponseToQuestionId == questionId) {
        //         answer = msg.Text
        //     }
        // })
        if (answer) {
            return (
                <ChatItem message={'answer'} style={{justifyContent: 'flex-end', paddingRight: 15}}/>
            )
        }
    }

    render() {
        const {height, width} = Dimensions.get('window');
        const {msgContainer} = styles;
        return (
            <View >
                <Header headerText={'Question'} backButton onPress={this.goBack}/>
                <View style={msgContainer}>
                    <View style={{
                        width: width,
                        height: height - 130
                    }}>
                        <View styel={{

                                backgroundColor: '#16ff11'
                            }}>
                            {
                                this.renderQuestion(/*this.props.selectedMsg*/)
                            }
                        </View>
                        <View styel={{

                            backgroundColor: '#16ff11'
                        }}>
                            {
                                this.renderAnswer(/*this.props.selectedMsg.Id*/)
                            }
                        </View>
                    </View>

                </View>
                <InputMessageComponent
                    onChangeText={this.onChangeMessage}
                    sendMessage={this.sendMessage}
                    value={this.props.msg}
                />
            </View>
        )
    }
}
const styles = {
    msgContainer: {
        flex:1,
        paddingBottom: 5,
        paddingTop: 5,
    },
    iconTextStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ddf'
    }

}
const mapStateToProps = (state) => {
    return {
        // userKey: state.auth.user.access_token,
        selectedOrder: state.order.selectedOrder,
        selectedMsg: state.messages.selectedMsg,
        messages: state.messages.messages,
        msg: state.messages.msg,
        loading: state.messages.loading
    }
}

export default connect(mapStateToProps, {sendMessage, onChangeMsg})(QuestionComponent);