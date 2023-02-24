import React from "react";
import { View, StyleSheet, TextInput, Button, Alert, ScrollView } from "react-native";
import { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddPress = (e) => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    } else {
      Alert.alert('Todo cant be empty!')
    }
  }

  const handleInput = (text) => {
    setInputValue(text);
  }

  return(
    <View style={styles.block}>
      <TextInput 
        style={styles.input} 
        value={inputValue} 
        onChangeText={handleInput}
        placeholder="Add todo"
        autoCorrect={false}
        keyboardType="default"
      >
      </TextInput>
      <Button  style={styles.btn} title='add' onPress={handleAddPress}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: "70%",
    borderStyle: "solid", 
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    padding: 10,
  },
  btn: {
    width: "30%",
  }
})