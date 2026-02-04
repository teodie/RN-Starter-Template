import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type BtnTypes = {
  primary: boolean
}

const Button = ({ primary }: BtnTypes) => {
  return (
    <TouchableOpacity style={
      [styles.Btn,
      {
        backgroundColor: primary ? 'blue' : 'white',
        borderWidth: primary ? 0 : 1,
      }]}>
      <Text style={{ color: primary ? 'white' : 'gray', fontSize: 20 }}>
        Button
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  Btn: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    borderColor: 'gray'
  }
})