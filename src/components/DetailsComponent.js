import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Tabs from 'react-native-tabs';
import {openDetails, loadingDetails} from '../actions';
import {Card, Header,CardItem, Spiner} from './common';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import DetailsTabComponent from './DetailsTabComponent';
import ItemsTabComponent from './ItemsTabComponent';
import PriceTabComponent from './PriceTabComponent';
import MessagesTabComponent from './MessagesTabComponent';


class DetailsComponent extends Component {

    state = {page:'1'};

    componentWillMount() {
        console.log(this.props);
        const {userKey, selectedOrder} = this.props;
        this.props.loadingDetails(userKey, selectedOrder.Id);
    }

    renderTabs() {
        const {Item} = this.props.details;
console.log(this.props);
        switch (this.state.page) {
            case '1':
                return (
                    <DetailsTabComponent
                        details={this.props.details}
                        orderHeader={this.props.selectedOrder.Header}
                    />
                )
            case '2':
                return (
                    <ItemsTabComponent item={Item}/>
                )
            case '3':
                return (
                    <PriceTabComponent item={Item}/>
                )
            case '4':
                return (
                    <MessagesTabComponent item={Item}/>
                )
        }
    }

    renderContent() {
        // console.log(this.props);
        if (this.props.loading ) {
            return (
                <Spiner size="large" />
            )
        }
        const {tabbarView, iconTextStyle} = styles;
        const headerText = 'Заказ №' + this.props.details.Id;
        return (
            <Card>
                <Header headerText={headerText} backButton/>

                <Tabs
                    selected={this.state.page} style={tabbarView}
                    selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}
                >
                    <Text name="1"
                          selectedIconStyle={{borderBottomWidth:2,borderTopColor:'#5970FF'}}
                          style={iconTextStyle}>
                        Детали
                    </Text>
                    <Text name="2"
                          selectedIconStyle={{borderBottomWidth:2,borderTopColor:'#5970FF'}}
                          style={iconTextStyle} >
                        Груз
                    </Text>
                    <Text name="3"
                          selectedIconStyle={{borderBottomWidth:2,borderTopColor:'#5970FF'}}
                          style={iconTextStyle}>
                        Цена
                    </Text>
                    <Text name="4"
                          selectedIconStyle={{borderBottomWidth:2,borderTopColor:'#5970FF'}}
                          style={iconTextStyle} >
                        Сообщения
                    </Text>
                </Tabs>

                <CardItem>
                    {
                        this.renderTabs()
                    }
                </CardItem>
            </Card>
        )

    }

    render() {
        return (
            this.renderContent()
        )
    }
}
const styles = {
    container: {
        flex: 1,
    },
    tabbarView: {
        flexDirection: 'row',
        position:'relative',
        top:0,
        right:0,
        left:0,
        height:30,
        opacity:1,
        backgroundColor:'#579fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTextStyle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ddf'
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userKey: state.auth.user.access_token,
        selectedOrder: state.order.selectedOrder,
        details: state.order.details,
        loading: state.order.loading
    }
}

export default connect(mapStateToProps,{openDetails, loadingDetails})(DetailsComponent);