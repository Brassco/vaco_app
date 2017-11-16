import React, {Component} from 'react';
import {View, TextInput, Dimensions, TouchableWithoutFeedback, Image} from 'react-native';

class InputMessageComponent extends Component {
    render() {
        const {width} = Dimensions.get('window');
        const {container, imageStyle} = styles;
        return (
            <View style={container}>
                <View style={{
                    margin: 2,
                    flex: 17
                }}>
                    <TextInput
                        editable = {true}
                        maxLength = {40}
                        multiline = {true}
                        numberOfLines = {4}
                        onChangeText={this.props.onChangeText}
                        value={this.props.value}
                    />
                </View>
                <View style={{
                    margin: 2,
                    flex: 3,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableWithoutFeedback onPress={this.props.sendMessage}>
                        <Image
                            style={imageStyle}
                            source={require('./img/send_msg.png')}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#909090',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        height: 50,
        flexDirection: 'row'
    },
    imageStyle: {
        width: 25,
        height: 25
    }
}

export default InputMessageComponent;