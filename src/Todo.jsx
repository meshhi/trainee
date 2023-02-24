import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Todo = ({todo, deleteTodo}) => {
  return(
    <TouchableOpacity 
    activeOpacity={0.1} 
    onPress={() => Alert.alert(`pressed ${todo.id}`)}
    onLongPress={deleteTodo.bind({}, todo.id)}
    >
      <View style={styles.todoListItem}>
        <Text 
        >{todo.data}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoListItem: {
    width: '100%',
    textAlign: 'center',
    marginVertical: 5,
    padding: 10,
    backgroundColor: `#f0ffff`,
  }
})