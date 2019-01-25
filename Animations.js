import React, {Component} from 'react';
import { Animated, TouchableOpacity, View, StyleSheet } from 'react-native';

class Animations extends Component {
  state = {
    collapsed: true
  }

  componentWillMount = () => {
    this.animatedWidth = new Animated.Value(50)
    this.animatedHeight = new Animated.Value(100)
  }

  animateBox = () => {
    if (this.state.collapsed) {
      Animated.timing(this.animatedWidth, {
        toValue: 200,
        duration: 1000
      }).start()

      Animated.timing(this.animatedHeight, {
        toValue: 300,
        duration: 500
      }).start()

      this.setState({ collapsed: false })
    } else {
      Animated.timing(this.animatedWidth, {
        toValue: 50,
        duration: 1000
      }).start()

      Animated.timing(this.animatedHeight, {
        toValue: 100,
        duration: 500
      }).start()

      this.setState({ collapsed: true })
    }
  }

  render() {
    //Dynamic Style
    const animatedStyle = {
      width: this.animatedWidth,
      height: this.animatedHeight
    }

    return (
      <TouchableOpacity style={styles.container} onPress={this.animateBox}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableOpacity>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 100
 }
});

export default Animations
