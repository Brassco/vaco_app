import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Tabs from 'react-native-tabs';
import {connect} from 'react-redux';
import {Card, Header, Spiner, CardItem, DetailsCard} from './common';
import {openDetails} from '../actions';

class DetailsTabComponent extends Component {

   renderContent() {
        const {
            flexDirection,
            headerContainerText,
            dateText,
            opacityText,
            boldText,
            redText,
            userImgContainer,
            userImg
        } = styles;
console.log(this.props);
            const {Addresses, Details, DateCreated, Distance} = this.props.details;

            var addressFrom = '';
            var addressTo = '';

            _.forEach(Addresses, function(address) {
                if (address.Direction == 'from') {
                    addressFrom = address.AddressText;
                }
                if (address.Direction == 'to') {
                    addressTo = address.AddressText;
                }
            });
            return (
                <View>
                        <DetailsCard style={{
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text style={headerContainerText}>
                                    {this.props.orderHeader}
                                </Text>
                            </View>
                            <View>
                                <Image
                                    style={{
                                        flex: 1,
                                        resizeMode: 'stretch',
                                    }}
                                    source={require('./img/star.png')}
                                />
                            </View>
                        </DetailsCard>
                        <DetailsCard>
                            <View>
                                <Text style={dateText}>
                                    Размещено {DateCreated}
                                </Text>
                            </View>
                            <View>
                                <Text>

                                </Text>
                            </View>
                        </DetailsCard>
                        <DetailsCard>
                            <View style={userImgContainer}>
                                <Image
                                    style={userImg}
                                    source={require('./img/user.png')}
                                />
                            </View>
                            <View>
                                <Text> Name</Text>
                                <Text> Online</Text>
                            </View>
                        </DetailsCard>
                        {/*
                         Растояние
                         */}
                        <DetailsCard>
                            <View style={userImgContainer}>
                                <Image
                                    style={userImg}
                                    source={require('./img/turn.png')}
                                />
                            </View>
                            <View>
                                <Text style={opacityText}> Растояние </Text>
                                <Text style={boldText}>
                                    {Distance}
                                </Text>
                            </View>
                        </DetailsCard>
                        {/*
                         Загрузка
                         */}
                        <DetailsCard style={{
                            flexDirection: 'column',
                            marginLeft: 40
                        }}>
                            <View>
                                <Text style={opacityText}> Загрузка</Text>
                                <Text style={boldText}>
                                    {addressFrom}
                                </Text>
                            </View>
                        {/*</DetailsCard>*/}
                        {/*
                         Выгрузка
                         */}
                        {/*<DetailsCard>*/}
                            <View>
                                <Text style={opacityText}> Выгрузка</Text>
                                <Text style={boldText}>
                                    {addressTo}
                                </Text>
                            </View>
                        {/*</DetailsCard>*/}
                        {/*
                         Сроки доставки
                         */}
                        {/*<DetailsCard>*/}
                            <View>
                                <Text style={[opacityText, redText]}> Сроки доставки</Text>
                                <Text style={redText}> 27.07 - 27.07</Text>
                            </View>
                        </DetailsCard>
                    </View>
            )
    }

    render() {
        return this.renderContent()
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


export default DetailsTabComponent;
