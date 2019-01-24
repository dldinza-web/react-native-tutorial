import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PresentationalComponent = (props) => {
  return(
    <View>
      <Text style={styles.myState} onPress={props.updateState}>
        {props.myState}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  myState: {
    width: 300,
    margin: 10,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default PresentationalComponent
