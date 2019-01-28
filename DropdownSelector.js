import React, { Component } from 'react'
import { View, Picker, StyleSheet, Text } from 'react-native'

class DropdownSelector extends Component {
  state = {
    selectedItemKey: 'none',
    selectedUser: null,
    dropdownItems: [
      { label: '', value: 'none' }
    ],
    users: [
      { username: 'mike', name: 'Mike' },
      { username: 'jordan', name: 'Jordan' },
      { username: 'stephanie', name: 'Stephanie' }
    ]
  }

  componentDidMount = () => {
    let items = []
    this.state.users.forEach((user) => {
      items.push({ value: user.username, label: user.name })
    })

    this.setState({ dropdownItems: this.state.dropdownItems.concat(items) })
  }

  setUser = (username) => {
    let selectedUser = this.state.users.find((item) => {
      return (item.username == username)
    })

    this.setState({ selectedUser: selectedUser });
  }

  render() {
    return(
      <View>
        <Picker selectedValue={this.state.selectedItemKey} onValueChange={this.setUser}>
          {
            this.state.dropdownItems.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))
          }
        </Picker>

        <Text style={styles.userInfo}>
          { (this.state.selectedUser) ? this.state.selectedUser.name : ''}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userInfo: {
    color: 'blue',
    fontSize: 20,
    alignSelf: 'center'
  }
})

export default DropdownSelector
