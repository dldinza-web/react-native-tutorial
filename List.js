import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class List extends Component {
  state = {
    names: [{
      id: 0,
      name: 'Ben'
    },
    {
      id: 1,
      name: 'Susan'
    },
    {
      id: 2,
      name: 'Robert'
    },
    {
      id: 3,
      name: 'Mary'
    }]
  }

  alertItem = (item) => {
    alert(JSON.stringify(item))
  }

  render() {
    return(
      <View style={styles.list}>
        {
          this.state.names.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem} onPress={() => this.alertItem(item)}>
              <Text>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    width: 400
  },
  listItem: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
    fontWeight: 'bold'
  }
})

export default List
