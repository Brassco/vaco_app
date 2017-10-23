import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {DetailsCard} from '../common';

const AddressComponent = ({from, to}) => {
    const {container, textContainer, valueContainer, arrowContainer, textStyle, arrowText} = styles;
    return (
        <DetailsCard >
            <View style={textContainer}>
                <Text style={textStyle}>
                    {from} - {to}
                </Text>
            </View>
            <View style={valueContainer}>
                <View style={arrowContainer}>
                    <ImageBackground
                        style={{
                            flex: 1,
                        }}
                        source={require('../img/arrow.png')}
                    >
                        <Text style={arrowText}>
                            125
                        </Text>
                    </ImageBackground>
                </View>
            </View>
        </DetailsCard>
    )
}

const styles = {
    container:{
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textContainer:{
        flex:7,
        // backgroundColor: '#579fff'
    },
    valueContainer: {
      flex: 3
    },
    arrowContainer: {
      // flexDirection: 'row',
      //   height: 13,
      //   justifyContent: 'center',
      //   alignItems: 'center'
    },
    arrowText: {
        color: '#fff',
        paddingLeft: 25,
        fontWeight: '500',
        fontSize: 15
    },
    textStyle: {
        color: '#61c9eb',
        fontWeight: '600'
    }
}

export {AddressComponent};
