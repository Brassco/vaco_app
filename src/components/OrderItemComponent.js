import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {DetailsCard} from './common';

class OrderItemComponent extends Component {

   render() {
        const {item} =this.props;

        const {
            container,
            headerStyle,
            descriptionTextStyle,
            itemNameStyle,
            descriptionContainer,
            headerText
        } = styles;
        return (
            <View style={container}>
                <DetailsCard style={{paddingLeft: 0, paddingRight: 0}}>
                    <View style={{
                        flex: 1,
                        height: 150
                        }}
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

const deviceWidth = (Dimensions.get('window').width);

const styles = {
    container: {
        flexDirection: 'column',
        width: {deviceWidth},
        paddingTop: 15
    },
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