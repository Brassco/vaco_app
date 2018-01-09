import React, {Component} from 'react';
import {Text } from 'react-native';
import {connect} from 'react-redux';
import Tabs from 'react-native-tabs';
import {Actions} from 'react-native-router-flux';
import {openDetails, loadingDetails, backToList, setSelectedPage, setPhoneVisibility} from '../actions';
import {Card, Header,CardItem, Spiner} from './common';
import DetailsTabComponent from './DetailsTabComponent';
import ItemsTabComponent from './ItemsTabComponent';
import PriceTabComponent from './Prices/PriceTabComponent';
import MessagesTabComponent from './Messages/MessagesTabComponent';


class DetailsComponent extends Component {

    state = {page:'1'};

    componentWillMount() {
        const {userKey, selectedOrder} = this.props;
        this.props.loadingDetails(userKey, selectedOrder.Id);
    }

    renderTabs() {
        console.log(this.props.selectedPage);
        const {Item} = this.props.details;
        switch (this.props.selectedPage) {
            case '1':
                return (
                    <DetailsTabComponent
                        setPhoneVisibility={this.props.setPhoneVisibility}
                        details={this.props}
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
            default:
                return (
                    <DetailsTabComponent
                        setPhoneVisibility={this.props.setPhoneVisibility}
                        details={this.props}
                        orderHeader={this.props.selectedOrder.Header}
                    />
                )
        }
    }

    selectTab = (id) => {
        console.log('selecteTab', id);
        this.props.setSelectedPage(id);
    }

    goBack = () => {
        this.props.backToList();
        Actions.pop();
    }

    renderContent() {
        if (this.props.loading ) {
            return (
                <Spiner size="large" />
            )
        }
        const {tabbarView, iconTextStyle} = styles;
        const headerText = 'Заказ №' + this.props.details.Id;
        return (
            <Card>
                <Header headerText={headerText}
                        backButton
                        onPress={this.goBack}
                        rightButton={this.props.details.AllowExecutorSetPrice}
                />

                <Tabs
                    selected={this.props.selectedPage}
                    style={tabbarView}
                    selectedStyle={{color:'#909087'}}
                    onSelect={el=>this.selectTab(el.props.name)}
                >
                    <Text name="1"
                          selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#909087'}}
                          style={iconTextStyle}>
                        Детали
                    </Text>
                    <Text name="2"
                          selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#909087'}}
                          style={iconTextStyle} >
                        Груз
                    </Text>
                    <Text name="3"
                          selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#909087'}}
                          style={iconTextStyle}>
                        Цена
                    </Text>
                    <Text name="4"
                          selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#909087'}}
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
        height:40,
        opacity:1,
        backgroundColor:'#73ADEA',
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
    return {
        userKey: state.auth.user.access_token,
        selectedOrder: state.order.selectedOrder,
        selectedPage: state.order.selectedPage,
        details: state.order.details,
        phoneIsVisible: state.order.phoneIsVisible,
        loading: state.order.loading
    }
}

export default connect(mapStateToProps,{openDetails, loadingDetails, backToList, setSelectedPage, setPhoneVisibility})(DetailsComponent);