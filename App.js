import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { useState } from 'react';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([

  ]);

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const addTodo = (text) => {
    const toDo = {
      id: new Date().toString() + Math.random(),
      data: text,
    }

    setTodos((prev) => [
      ...prev,
      toDo
    ]);
  }

  return (
    <View>
      <Navbar title='Todo list'></Navbar>
      <View style={styles.container}>
        <AddTodo addTodo={addTodo}></AddTodo>
        <FlatList 
        data={todos} 
        renderItem={({item, index, separators}) => {
          return <Todo 
          todo={item}
          deleteTodo={deleteTodo}
          />
        }}
        keyExtractor={(item) => item.id}
        >

        </FlatList>
        {/* <TodoList todos={todos}></TodoList> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
