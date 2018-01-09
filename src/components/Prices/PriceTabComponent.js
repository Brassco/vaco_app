import React from 'react';
import { Text, View, Image, ListView} from "react-native";
import {connect} from 'react-redux';
import {loadingPrices} from '../../actions/PriceActions';
import {Card, CardItem} from '../common';

class PriceTabComponent extends React.Component {

    componentWillMount(){
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({details}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        var applications = details.Applications !== null ? details.Applications : [];
        this.dataSource = ds.cloneWithRows(applications)
    }

    renderRow(price) {
        const {
            companyName,
            userImg,
            isOnline,
            priceText,
            stateText,
            extraDetailsText,
        } = styles;
        return (
            <CardItem key={price.Id}>
                <View style={{ flex: 1}}>
                    <Image
                        style={userImg}
                        source={require('../img/user.png')}
                    />
                </View>
                <View style={{
                    flex: 4
                }}>
                    <View>
                        <Text style={companyName}>
                            TransLine
                        </Text>
                    </View>
                    <View>
                        <Text style={isOnline}>
                            сейчс на сайте
                        </Text>
                    </View>

                </View>
                <View style={{ flex: 3}}>
                    <View>
                        <Text style={priceText}>
                            {price.ProposedPrice} Руб
                        </Text>
                    </View>
                    <View>
                        <Text style={stateText}>
                            Готов к перевозке
                        </Text>
                    </View>
                    <View>
                        <Text style={extraDetailsText}>
                            только перевозка
                        </Text>
                    </View>
                </View>
            </CardItem>
        )
    }

    renderPrices = () => {
    if (this.props.details.Applications) {
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)} />
        )
    }
    return (
        <View>
            <Text>
                Еще нету ценовых предложений
            </Text>
        </View>
    )

    }

    render() {
        return (
            <Card>
                {this.renderPrices()}
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userKey: state.auth.user.access_token,
        selectedOrder: state.order.selectedOrder,
        details: state.order.details,
        prices: state.prices.prices,
        loading: state.prices.loading
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'column'
    },
    headerContainerStyle: {
        flex: 10,
        flexDirection: 'row'
    },
    boldText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#1d1d1d'
    },
    userImgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 6
    },
    userImg: {
        width: 30,
        height: 30,
    },
    leftPadding: {
        paddingLeft: 40
    },
    companyName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#224dff'
    },
    isOnline: {
        fontSize: 15,
        fontWeight: '400',
        color: '#909090'
    },
    msgIcon: {
        width: 25,
        height: 25,
    },
    priceText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#224dff'
    },
    stateText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#224dff'
    },
    extraDetailsText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#909090'
    },
    proText: {
        color:"#16ff11",
        fontSize: 16,
        fontWeight: '600'
    }
}

export default connect(mapStateToProps,{loadingPrices})(PriceTabComponent);
