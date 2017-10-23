import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Card, CardItem, Button, DetailsCard} from './common';
import {ItemRow, AddressComponent, DeliveryDateComponent, CreatedDateComponent} from './parts';

const ItemDetails = ({item, onPress}) => {
    const {headerTextStyle} = styles;
    return (
        <CardItem>
            <TouchableWithoutFeedback onPress={() => onPress(item)}>
                <View style={{flex:1, flexDirection: 'column'}} >
                    <ItemRow icon={item.ParentCategory}>
                        <Text style={headerTextStyle}>
                            {item.Header}, {item.ParentCategory}
                        </Text>
                    </ItemRow>
                    <ItemRow icon={false}>
                        <AddressComponent from={item.FromAddress} to={item.ToAddress}/>
                        <DeliveryDateComponent date={item.LoadDate}/>
                        <CreatedDateComponent date={item.DateCreated}/>
                    </ItemRow>
                </View>
            </TouchableWithoutFeedback>
        </CardItem>
    )
}

const styles = {
    headerTextStyle: {
        fontSize: 18,
        fontWeight: '500'
    },
}

export default ItemDetails;
