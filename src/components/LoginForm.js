import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Platform, BackHandler} from 'react-native';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import {onEmailChange, onPasswordChange, loginUser} from '../actions';
import {Card, CardItem, InputWithLabel, Button, ErrorText, Spiner, Header} from './common';

class LoginForm extends Component {

    emailChange(email) {
        this.props.onEmailChange(email);
    }

    changePassword(pass) {
        this.props.onPasswordChange(pass)
    }

    buttonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spiner size={'small'}/>
        }
        return (
            <Button onPress={this.buttonPress.bind(this)}>
                Войти
            </Button>
        )
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            LocationServicesDialogBox.checkLocationServicesIsEnabled({
                message: "<h2>Использовать гео-данные ?</h2>Для корректной работы приложения необходимы гео-данные:<br/><br/>Использовать GPS, Wi-Fi <br/>",
                ok: "Разрешить",
                cancel: "Нет",
                enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => ONLY GPS PROVIDER
                showDialog: true, // false => Opens the Location access page directly
                openLocationServices: true // false => Directly catch method is called if location services are turned off
            }).then(function (success) {
                    // this.sendLocation();
                }.bind(this)
            ).catch((error) => {
                console.log(error)
            });

            BackHandler.addEventListener('hardwareBackPress', () => {
                LocationServicesDialogBox.forceCloseDialog();
            });
        }
    }

    render() {
        return (
            <Card>
                <Header headerText="Добро пожаловать" />
                <CardItem>
                    <InputWithLabel
                        label={'Email'}
                        placeholder={'Email'}
                        onChangeText={this.emailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardItem>
                <CardItem>
                    <InputWithLabel
                        label={'Пароль'}
                        placeholder={'пароль'}
                        onChangeText={this.changePassword.bind(this)}
                        value={this.props.password}
                        secureTextEntry={true}
                    />
                </CardItem>

                <CardItem>
                    {
                        this.renderButton()
                    }
                </CardItem>
                <ErrorText>
                    {this.props.error}
                </ErrorText>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {email, password, user, error, loading} = state.auth;
    return {
        email: email,
        password: password,
        user: user,
        error: error,
        loading: loading
    }
}

export default connect(mapStateToProps, {onEmailChange, onPasswordChange, loginUser})(LoginForm);