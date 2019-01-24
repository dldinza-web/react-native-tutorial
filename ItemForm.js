import React, {Component} from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

        <TouchableOpacity style={styles.buttonsWrapper}>
          <Text style={styles.btn} onPress={() => this.login(this.state)}>Sign in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ItemForm

const styles = StyleSheet.create({
  form: {
    width: 400,
    paddingTop: 23,
    alignItems: 'center'
  },
  input: {
    margin: 15,
    height: 40,
    width: 400,
    borderWidth: 1,
    borderColor: '#7a42f4',
    padding: 10,
  },
  buttonsWrapper: {
    alignItems: 'center'
  },
  btn: {
    padding: 10,
    backgroundColor: '#7a42f4',
    color: '#ffffff',
    margin: 15,
    height: 40,
    width: 400,
    textAlign: 'center'
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5
  },
  valuesViewer: {
    flexDirection: 'row'
  }
})
