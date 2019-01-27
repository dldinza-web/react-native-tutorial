import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'

class ModalBox extends Component {
  state = {
    modalVisible: false
  }

  onCloseModal = () => {
    console.log("Modal closed")
  }

  toggleModal = (visible) => {
    this.setState({ modalVisible: visible })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.onCloseModal}
        >
          <View style={styles.modal}>
            <Text style={styles.modalText}>Modal is open</Text>

            <TouchableOpacity style={[styles.btn, styles.btnOrange]} onPress={() => { this.toggleModal(false)}}>
              <Text style={styles.btnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity style={[styles.btn, styles.btnGreen]} onPress={() => { this.toggleModal(true)}}>
          <Text style={styles.btnText}>Open</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 100
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 100
  },
  btn: {
    padding: 20,
    marginTop: 15
  },
  btnText: {
    color: 'white'
  },
  btnOrange: {
    backgroundColor: 'orange',
  },
  btnGreen: {
    backgroundColor: 'green',
  }
})

export default ModalBox
