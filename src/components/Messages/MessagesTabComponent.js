import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    ListView
} from "react-native";
import {connect} from 'react-redux';
import {loadingMessages, sendMessage, onChangeMsg} from '../../actions/MessagesActions';
import {Spiner, DetailsCard, Card, Header} from '../common';
import MessageItemComponent from './MessageItemComponent';
import InputMessageComponent from './InputMessageComponent';
import moment from 'moment';

class MessagesTabComponent extends React.Component {

    componentWillMount(){
        const {user, selectedOrder} = this.props;
        this.props.loadingMessages(user.access_token, selectedOrder.Id);
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

    onChangeMessage = (msg) => {
        this.props.onChangeMsg(msg);
    }

    sendMessage = () => {
        const msgObj = {
            authorId: this.props.user.info.Id,
            assignmentId: this.props.selectedOrder.Id,
            text: this.props.msg,
            dateTime: moment().format()
        }
        this.props.sendMessage(this.props.user, msgObj, this.props.selectedOrder.Id);
    }

    renderRow(message) {

        return (
            <MessageItemComponent
                key={message.Id}
                message={message}
            />
        )
    }

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

        const {width, height} = Dimensions.get('window');
        return (
            <View>
                <View style={{
                    width: width,
                    paddingLeft: 5,
                    paddingRight: 5,
                    height: height - 170
                }}>
                {
                    this.renderMessages()
                }
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

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        selectedOrder: state.order.selectedOrder,
        selectedMsg: state.messages.selectedMsg,
        messages: state.messages.messages,
        msg: state.messages.msg,
        loading: state.messages.loading
    }
}

export default connect(mapStateToProps, {loadingMessages, sendMessage, onChangeMsg})(MessagesTabComponent);
