import React from 'react';
import {View, Text, Image} from 'react-native';

const Icon = ({icon}) => {
    const {iconStyle} = style;
    return (
        <View style={iconStyle}>
            {renderImg(icon)}
        </View>
    )
}

const categoryImages = {
    'Домашние вещи': require('../img/1.jpg'),
    'Перевозки по городу' : require('../img/1.jpg'),
    'Переезд' : require('../img/3.jpg'),
    'Автомобили' : require('../img/4.jpg'),
    'Мототехника' : require('../img/5.jpg'),
    'Водный транспорт' : require('../img/6.jpg'),
    'Транспорт и запчасти' : require('../img/7.jpg'),
    'Строительные грузы' : require('../img/8.jpg'),
    'Попутные грузы' : require('../img/9.jpg'),
    'Сыпучие грузы' : require('../img/10.jpg'),
    'Наливные грузы' : require('../img/11.jpg'),
    'Сельхоз. продукция' : require('../img/12.jpg'),
    'Вывоз мусора' : require('../img/13.jpg'),
    'Продукты питания' : require('../img/14.jpg'),
    'Перевозка животных' : require('../img/15.jpg'),
    'Коммерческие грузы' : require('../img/16.jpg'),
    'Перевозка людей' : require('../img/17.jpg'),
    'Негабаритные перевозки' : require('../img/18.jpg'),
    'Контейнеры и перевозка по ЖД' : require('../img/19.jpg'),
    'Спец. грузы и другое' : require('../img/20.jpg'),
    'Заказать манипулятор' : require('../img/21.jpg'),
    'Заказать отдельную машину' : require('../img/22.jpg'),
}

const getImgByCategory = (categoryName) => {
    return categoryImages[categoryName];
}

renderImg = (icon) => {
    if (icon) {
        const img = getImgByCategory(icon);
        return (
            <Image
                style={{
                    flex: 1,
                    resizeMode: 'stretch',
                }}
                source={img}
            />
        )
    }
}

const style = {
    iconStyle: {
        flex:1,
        // width: 200,
        // height: 200
    }
}

export default Icon;