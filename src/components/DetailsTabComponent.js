import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {DetailsCard, Button} from './common';

class DetailsTabComponent extends Component {

    renderPhoneNumber(details) {
        const {phoneContainer, phoneStyle} = styles;
        if (details.phoneIsVisible == false) {
            return (
                <Button onPress={() => this.props.setPhoneVisibility()}>
                    <Text style={phoneStyle}> Показать телефон</Text>
                </Button>
            )
        } else {
            return (
                <View style={phoneContainer}>
                    <Text style={phoneStyle}>
                        123-45-67-89
                    </Text>
                </View>
            )
        }
    }

   renderContent() {
        const {
            headerContainerText,
            dateText,
            opacityText,
            boldText,
            redText,
            userImgContainer,
            userImg
        } = styles;

            const {Addresses, AssigmentDueDateTime, DateCreated, Distance} = this.props.details.details;

            var addressFrom = '';
            var addressTo = '';

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

                   </View>
                   { this.renderPhoneNumber(this.props.details)}

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
                   {/*
                    Выгрузка
                    */}
                   <View>
                       <Text style={opacityText}> Выгрузка</Text>
                       <Text style={boldText}>
                           {addressTo}
                       </Text>
                   </View>
                   {/*
                    Сроки доставки
                    */}
                   <View>
                       <Text style={[opacityText, redText]}> Сроки доставки</Text>
                       <Text style={redText}>
                           {AssigmentDueDateTime}
                       </Text>
                   </View>
               </DetailsCard>
           </View>
       )
       _.forEach(Addresses, function(address) {
                if (address.Direction == 'from') {
                    addressFrom = address.AddressText;
                }
                if (address.Direction == 'to') {
                    addressTo = address.AddressText;
                }
            });
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
    },
    phoneContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
    },
    phoneStyle: {
        color: '#579fff',
        fontWeight: '600',
        fontSize: 16
    }
}


export default DetailsTabComponent;
