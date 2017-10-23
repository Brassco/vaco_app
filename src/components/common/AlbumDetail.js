import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {headerContainerStyle,
        thumbnailImageStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = style;
    const {thumbnail_image, title, artist, image, url } = album;
    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailImageStyle} source={{uri: thumbnail_image}}/>
                </View>

                <View style={headerContainerStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={imageStyle} source={{uri: image}}/>
            </CardItem>
            <CardItem>
                <Button onPress={ () => Linking.openURL(url)}> Buy now </Button>
            </CardItem>
        </Card>
    )
}

const style = {
    headerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailImageStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        flex:1,
        width: null,
        height: 300
    }
}

export default AlbumDetail;