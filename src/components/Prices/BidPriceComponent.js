import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Dimensions,
    Picker,
    TouchableWithoutFeedback
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {sendMessage, changeMsg, changePrice } from '../../actions/PriceActions';
import {Card, Header,Button, ErrorText, Spiner} from '../common';


class QuestionComponent extends Component {

    goBack = () => {
        // this.props.backToList();
        Actions.pop();
    }

    sendMessage = () => {
        const msg = {
            AuthorId: parseInt(this.props.user.info.Id),
            AssignmentId: parseInt(this.props.selectedOrder.Id),
            Text: this.props.msg,
            ProposedPrice: parseInt(this.props.price)
        }
        this.props.sendMessage(this.props.user.access_token, msg);
    }

    changePrice = (price) => {
        var newText = '';
        var numbers = '0123456789';
        if(price.length < 1){
            this.props.changePrice('');
        }
        for (var i=0; i < price.length; i++) {
            if(numbers.indexOf(price[i]) > -1 ) {
                newText = newText + price[i];
            }
            this.props.changePrice(newText);
        }
    }

    changeMsg = (msg) => {
        this.props.changeMsg(msg);
    }

    onChangeCountry = (itemValue, itemIndex) => {
        console.log(itemValue, itemIndex);
    }

    renderContent = () => {
        if (this.props.loading == false) {
            const {height, width} = Dimensions.get('window');
            const {borderRound, priceContainer, containerHeight} = styles;
            return (
                <View >
                    <Header headerText={'Заявка'} backButton onPress={this.goBack}/>
                    <View style={{
                        flex: 1
                    }}>
                        <View
                            style={priceContainer}
                        >
                            <View
                                style={[
                                    borderRound,
                                    containerHeight, {
                                        flex:6
                                    }
                                ]}
                            >
                                <TextInput
                                    placeholder={'Цена'}
                                    maxLength = {40}
                                    keyboardType='numeric'
                                    onChangeText={this.changePrice.bind(this)}
                                    value={this.props.price}
                                />
                            </View>
                            <View style={[
                                borderRound,
                                containerHeight, {
                                    flex:3
                                }
                            ]}>
                                <Picker
                                    selectedValue={"kzt"}
                                    onValueChange={this.onChangeCountry.bind(this)}>
                                    <Picker.Item label="KZT" value="kzt" />
                                </Picker>
                            </View>
                        </View>
                        <View style={[
                            styles.borderRound,
                            {
                                height: 100
                            }
                        ]}>
                            <TextInput
                                placeholder={'Введите сообщение'}
                                editable = {true}
                                maxLength = {40}
                                multiline = {true}
                                numberOfLines = {4}
                                onChangeText={this.changeMsg.bind(this)}
                                value={this.props.msg}
                            />
                        </View>
                        <View
                            style={containerHeight}
                        >
                            <Button onPress={this.sendMessage.bind(this)}>
                                <Text>
                                    Предложить цену
                                </Text>
                            </Button>
                        </View>
                    </View>
                    <ErrorText>
                        {this.props.error}
                    </ErrorText>
                </View>
            )
        }
        return (
            <Spiner size="large"/>
        )
    }

    render() {
        return this.renderContent();
    }
}
const styles = {
    containerHeight: {
        height: 50
    },
    priceContainer: {
        flexDirection: 'row',
        height: 50,
        marginTop: 5,
        marginBottom: 5
    },
    borderRound: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        margin: 5,
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        selectedOrder: state.order.selectedOrder,
        msg: state.prices.msg,
        price: state.prices.value,
        loading: state.prices.loading,
        error: state.prices.error
    }
}

export default connect(mapStateToProps, {sendMessage, changeMsg, changePrice})(QuestionComponent);