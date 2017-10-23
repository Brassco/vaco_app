import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {DetailsCard} from './common';
import Icon from './parts/Icon';

class OrderItemComponent extends Component {

   render() {
        const {item} =this.props;
        const deviceWidth = (Dimensions.get('window').width);
        const {
            headerStyle,
            descriptionTextStyle,
            itemNameStyle,
            descriptionContainer,
            headerText
        } = styles;
        console.log(deviceWidth);
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                width: deviceWidth,
                paddingTop: 15
            }}>
                <DetailsCard>
                    <View style={{
                        height: 150,
                        width: deviceWidth,
                        }}
                          onLayout={
                              (event) => {
                                  const {x, y, width, height} = event.nativeEvent.layout;
                                  console.log(width);
                              }
                          }
                    >
                        <View style={headerStyle}>
                            <Text style={headerText}> 1 груз </Text>
                            <Text style={headerText}> вес: {item.Weight} кг, Обьем: {item.Size} м </Text>
                        </View>
                        <View style={descriptionContainer}>
                            <Text style={itemNameStyle}>
                                {item.Name}
                            </Text>
                            <Text style={descriptionTextStyle}>
                                вес: {item.Weight} кг,
                                Обьем: {item.Size} м
                            </Text>
                            <Text style={descriptionTextStyle}>
                                Габариты: {item.LHW} см
                            </Text>
                        </View>
                    </View>
                </DetailsCard>
            </View>
        )
    }

}

const styles = {
    headerStyle: {
        backgroundColor: '#c9c9c0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: '500',
        fontSize: 16
    },
    descriptionContainer: {
        paddingLeft: 20
    },
    descriptionTextStyle: {
        color: '#bcbcb3',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 3,
        marginBottom: 3
    },
    itemNameStyle: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: 5,
        marginBottom: 3
    }
}

export default OrderItemComponent;