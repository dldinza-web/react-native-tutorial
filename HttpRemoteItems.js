import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HttpRemoteItems extends Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
      .then((response) => response.json())
      .then((respJson) => {
        this.setState({ data: respJson });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>Remote Items</Text>
          <Text>Quantity: { this.state.data.length }</Text>
        </View>

        {
          this.state.data.length < 1
          ? null
          : (
            <View>
              <Text style={styles.label}>First user Info</Text>
              <Text>Full Name: { this.state.data[0].name }</Text>
              <Text>Email: { this.state.data[0].email }</Text>
            </View>
          )
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  label: {
    fontWeight: 'bold'
  }
});

export default HttpRemoteItems
