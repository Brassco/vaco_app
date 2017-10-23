import React, {Component} from 'react';
import {ScrollView, ListView} from 'react-native';
import {connect} from 'react-redux';
import {loadingOrders, openDetails} from '../actions';
import ItemDetails from './ItemDetails';
import {Header, Card, Spiner, CardItem, DetailsCard} from './common';


class ListComponent extends Component {

    componentWillMount(){

        // if (this.props.orders == null) {
            this.props.loadingOrders(this.props.user);
            this.createDataSource(this.props);
        // }
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
        orders: orders.orders
    }
}

export default connect(mapStateToProps, {loadingOrders, openDetails})(ListComponent);