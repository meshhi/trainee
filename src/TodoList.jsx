import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

export const TodoList = ({todos}) => {
  return(
    <View style={styles.todoList}>
      {
        todos.map(todo => <Text style={styles.todoListItem} key={todo.id}>{todo.data}</Text>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  todoList: {
    // alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginVertical: 5,
  },
  todoListItem: {
    width: '100%',
    textAlign: 'center',
    marginVertical: 5,
    padding: 10,
    backgroundColor: `#f0ffff`,
  }
})