import React, {Component} from 'react';
import {ListView, Platform, BackHandler, Alert} from 'react-native';
import {connect} from 'react-redux';
import BackgroundGeolocation from 'react-native-mauron85-background-geolocation';
import {loadingOrders, openDetails, sendLocation} from '../actions';
import ItemDetails from './ItemDetails';
import {Header, Card, Spiner} from './common';
import {Actions} from 'react-native-router-flux';


class ListComponent extends Component {

    componentWillMount(){
console.log('component will mount')
        this.props.loadingOrders(this.props.user);
        this.createDataSource(this.props);

    }

    componentDidMount() {
console.log('componentDidMount', this.props.loading)
        BackgroundGeolocation.configure({
            desiredAccuracy: 10,
            stationaryRadius: 50,
            distanceFilter: 50,
            notificationTitle: 'Background tracking',
            notificationText: 'enabled',
            debug: false,
            startOnBoot: false,
            stopOnTerminate: false,
            locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
            interval: 10000,
            fastestInterval: 5000,
            activitiesInterval: 10000,
            stopOnStillActivity: false,

        });

        BackgroundGeolocation.on('location', (location) => {
            BackgroundGeolocation.startTask(taskKey => {
                this.sendLocation(location)
                BackgroundGeolocation.endTask(taskKey);
            });
        });

        BackgroundGeolocation.on('stationary', (stationaryLocation) => {
            Actions.sendLocation(stationaryLocation);
        });

        BackgroundGeolocation.on('error', (error) => {

        });

        BackgroundGeolocation.on('start', () => {
console.log('start')
        });

        BackgroundGeolocation.on('stop', () => {
console.log('stop')
        });

        BackgroundGeolocation.on('authorization', (status) => {
console.log('authorization', status);
            if (status !== BackgroundGeolocation.AUTHORIZED) {
                Alert.alert('Location services are disabled', 'Would you like to open location settings?', [
                    { text: 'Yes', onPress: () => BackgroundGeolocation.showLocationSettings() },
                    { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
                ]);
            }
        });

        BackgroundGeolocation.on('background', () => {
            console.log('[INFO] App is in background');
        });

        BackgroundGeolocation.on('foreground', () => {
            console.log('[INFO] App is in foreground');
        });

        BackgroundGeolocation.checkStatus(status => {
            // you don't need to check status before start (this is just the example)
            if (!status.isRunning) {
                BackgroundGeolocation.start(); //triggers start on start event
            }
        });
    }

    componentWillUnmount() {
        BackgroundGeolocation.events.forEach(event => BackgroundGeolocation.removeAllListeners(event));
        // navigator.geolocation.clearWatch(this.watchId);
    }

    sendLocation = (location) => {
        if (location) {
            const coordsObj = {
                CoordinatesValue: location.latitude + " " + location.longitude,
                UserId: this.props.user.info.Id
            }
            const now = Date.now();
            const time = this.props.locationCheckoutTime == 0 ? now : location.time;
            this.props.sendLocation(this.props.user, coordsObj, time)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({orders}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(orders)
    }

    openDetails(order) {
        this.props.openDetails(order);
    }

    renderRow(order) {
        return (
            <ItemDetails
                key={order.Id}
                item={order}
                onPress={this.openDetails.bind(this)}
            />
        )
    }

    renderAlbums() {
        if (this.props.loading === false) {
            return (
                <ListView
                    enableEmptySections={true}
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)} />
            )
        }
        return (
            <Spiner size="large"/>
        )

    }

    render() {
        return (
            <Card>
                <Header headerText="Список заявок" />
                {
                    this.renderAlbums()
                }
            </Card>
        )
    }
}

mapStateToProps = ({auth, orders}) => {
    return {
        user: auth.user,
        loading: orders.loading,
        orders: orders.orders,
        locationCheckoutTime: auth.locationCheckoutTime
    }
}

export default connect(mapStateToProps, {loadingOrders, openDetails, sendLocation})(ListComponent);