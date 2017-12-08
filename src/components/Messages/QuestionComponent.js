import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    Dimensions,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
    sendMessage,
    onChangeMsg,
    setMessagesForQuestion,
    clearMessagesForQuestion,
    loadingMessages
} from '../../actions/MessagesActions';
import ChatItem from './ChatItem';
import {Card, Header,CardItem, Spiner} from '../common';
import InputMessageComponent from './InputMessageComponent';
import moment from 'moment';


class QuestionComponent extends Component {

    componentWillMount() {
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({messages}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        const messagesArray = [];
        messagesArray.push(this.props.selectedMsg);

        const allMessages = this.getMsgs(messagesArray, this.props.selectedMsg.Id, messages);

        this.dataSource = ds.cloneWithRows(allMessages)
    }

    goBack = () => {
        this.props.clearMessagesForQuestion();
        Actions.pop();
    }

    sendMessage = () => {
        const msgObj = {
            AuthorId: this.props.user.info.Id,
            AssignmentId: this.props.selectedOrder.Id,
            Text: this.props.msg,
            // DateTime: moment().format(),
            ResponseToQuestionId: this.props.selectedMsg.Id
        }
        if (this.props.msg != '') {
            this.props.sendMessage(this.props.user, msgObj, this.props.selectedOrder.Id);
        }
    }

    onChangeMessage = (msg) => {
        this.props.onChangeMsg(msg);
    }

    getMsgs = (messagesArray, msgId, messages) => {

        if (messages) {
            messages.map((msg) => {
                if (msg.ResponseToQuestionId == msgId) {
                    messagesArray.push(msg)
                    this.getMsgs(messagesArray,msg.Id)
                }
            })
        }
        return messagesArray;
    }

    // renderContent = () => {
    //     if (this.props.messagesForQuestion.length >= 1) {
    //
    //         return (
    //             this.props.messagesForQuestion.map( (msg)=> {
    //                 return (
    //                     <ChatItem style={{
    //                         justifyContent: 'flex-start'
    //                     }}
    //                     key={msg.Id}
    //                     role={msg.AuthorId == this.props.selectedMsg.AuthorId ? 'Перевозчик' : 'Грузовладелец'}
    //                     date={msg.DateTime}
    //                     >
    //                     {
    //                         msg.Text
    //                     }
    //                     </ChatItem>
    //                 )
    //            })
    //         )
    //     } else {
    //        return(
    //            <Spiner size="large"/>
    //        )
    //     }
    // }

    renderRow(msg) {

        return (
            <ChatItem style={{
                        justifyContent: 'flex-start'
                    }}
            key={msg.Id}
            role={msg.AuthorId == this.props.selectedMsg.AuthorId ? 'Перевозчик' : 'Грузовладелец'}
            date={msg.DateTime}
            >
            {
                msg.Text
            }
            </ChatItem>
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
        const {height, width} = Dimensions.get('window');
        const {msgContainer} = styles;
        return (
            <Card>
                <Header headerText={'Question'} backButton onPress={this.goBack}/>
                <View style={[msgContainer, {
                    width: width,
                    height: height - 130
                }]}>
                    {
                        this.renderMessages()
                    }
                </View>
                <InputMessageComponent
                    onChangeText={this.onChangeMessage}
                    sendMessage={this.sendMessage}
                    value={this.props.msg}
                />
            </Card>
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
        user: state.auth.user,
        selectedOrder: state.order.selectedOrder,
        selectedMsg: state.messages.selectedMsg,
        messages: state.messages.messages,
        messagesForQuestion: state.messages.messagesForQuestion,
        msg: state.messages.msg,
        loading: state.messages.loading
    }
}

export default connect(mapStateToProps, {
    sendMessage,
    onChangeMsg,
    setMessagesForQuestion,
    clearMessagesForQuestion,
    loadingMessages
})(QuestionComponent);