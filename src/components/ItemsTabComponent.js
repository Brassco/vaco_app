import React, {Component} from 'react';
import {Animated, ScrollView} from 'react-native';
import OrderItemComponent from './OrderItemComponent';

class ItemsTabComponent extends Component {

    render() {
        const animVal = new Animated.Value(0);
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={5}
                pagingEnabled
                onScroll={
                    Animated.event(
                        [{nativeEvent: {contentOffset: {x: animVal}}}]
                    )
                }
            >
                {
                    this.props.item.map((item) => {
                        return <OrderItemComponent key={item.Id} item={item} />
                    })
                }

            </ScrollView>

        )
    }
}

export default ItemsTabComponent;