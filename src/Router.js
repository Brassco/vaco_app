import React from 'react';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ListComponent from './components/ListComponent';
import DetailsComponent from './components/DetailsComponent';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="auth"
                       hideNavBar
                >
                    <Scene
                        key='login'
                        component={LoginForm}
                        title="Please Login"
                        hideNavBar
                    />
                </Scene>
                <Scene key="main"
                hideNavBar
                >
                    <Scene
                        key='list'
                        component={ListComponent}
                        title="List"
                    />
                    <Scene
                        key='orderDetails'
                        component={DetailsComponent}
                        title="Details"
                        back
                        />

                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;