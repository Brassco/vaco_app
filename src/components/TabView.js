import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes, Button } from "react-native";
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

class TabView extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <Text>
            Tab title:{this.props.title} name:{this.props.name}
            </Text>
      </View>
    );
  }
}

export default TabView;
