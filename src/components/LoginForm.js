import React, {Component} from 'react';
import {connect} from 'react-redux';
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