import React from 'react';
import { Text, View} from "react-native";
import {connect} from 'react-redux';
import {loadingPrices} from '../actions/PriceActions';
import {DetailsCard, Spiner} from './common';

class PriceTabComponent extends React.Component {
    componentWillMount(){
        const {userKey, selectedOrder} = this.props;
        this.props.loadingPrices(userKey, 4340);
    }

    renderPrices = () => {
        const {
            headerContainerText,
            dateText,
            opacityText,
            boldText,
            redText,
            userImgContainer,
            userImg
        } = styles;

        if (this.props.loading == false) {

            return (
                <View>
                    {
                        this.props.prices.map((price) => {
                            return (
                                <View key={price.Id}>
                                    <DetailsCard style={{
                                        justifyContent: 'space-between'
                                    }}>
                                        <View>
                                            <Text style={headerContainerText}>
                                                {price.Text}
                                            </Text>
                                        </View>
                                        <View>
                                            {price.ProposedPrice}
                                        </View>
                                    </DetailsCard>
                                </View>
                            )
                        })
                    }
                </View>
            )
        } else {
            return (
                <Spiner size="large" />
            )
        }
    }

    render() {
        console.log('render');
        return this.renderPrices()
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userKey: state.auth.user.access_token,
        selectedOrder: state.order.selectedOrder,
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
    headerContainerText: {
        fontSize: 20,
        fontWeight: '300',
        color: '#579fff'
    },
    dateText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#bcbcb3'
    },
    opacityText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#bcbcb3'
    },
    boldText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#1d1d1d'
    },
    redText: {
        color: '#ef1a25'
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
    }
}

export default connect(mapStateToProps,{loadingPrices})(PriceTabComponent);
