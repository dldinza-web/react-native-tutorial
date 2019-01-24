import React, {Component} from 'react';
import { View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback } from 'react-native';

class ItemForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }

  handlePassword = (text) => {
    this.setState({ password: text });
  }

  login = (state) => {
    alert(JSON.stringify(this.state));
  }

  hanlePress = () => {
    alert('hi');
  }

  render() {
    return(
      <View style={styles.form}>
        <View style={styles.valuesViewer}>
          <Text style={styles.label}>Current Email:</Text>
          <Text>{this.state.email}</Text>
        </View>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"

          onChangeText={this.handleEmail}

          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"

          onChangeText={this.handlePassword}

          style={styles.input}
        />

        <View style={styles.buttonsWrapper}>
          <Button
            onPress={() => this.login(this.state)}
            title="Sign in"
          />
        </View>

        <TouchableOpacity>
          <Text style={[styles.btn, styles.btn1]}>Test Touchable Opacity</Text>
        </TouchableOpacity>

        <TouchableHighlight>
          <Text style={[styles.btn, styles.btn2]}>Test Touchable Highlighted</Text>
        </TouchableHighlight>

        <TouchableNativeFeedback>
          <Text style={[styles.btn, styles.btn3]}>Test Touchable NativeFeedback</Text>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback>
          <Text style={[styles.btn, styles.btn4]}>Test Touchable NativeFeedback</Text>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default ItemForm

const styles = StyleSheet.create({
  form: {
    padding: 23
  },
  input: {
    marginTop: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#7a42f4',
    padding: 10,
  },
  buttonsWrapper: {
    alignItems: 'center',
    paddingTop: 10
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5
  },
  valuesViewer: {
    flexDirection: 'row'
  },
  btn: {
    padding: 10,
    color: '#ffffff',
    marginTop: 15,
    height: 40,
    textAlign: 'center'
  },
  btn1: {
    backgroundColor: '#7a42f4'
  },
  btn2: {
    backgroundColor: 'green'
  },
  btn3: {
    backgroundColor: 'orange'
  },
  btn4: {
    backgroundColor: 'purple'
  }
})
