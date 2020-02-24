import React from 'react';
import logo from './logo.svg';
import './App.css';

let todolist = [
  {
    content:'Task 1',priority: 2, completed: true
  },
  {
    content:'Task 2',priority: 1, completed: true
  },
  {
    content:'Task 3',priority: 3, completed: false
  }
]
function TodoItem(props){
  return <p>{props.content}</p>
}
function App() {
  const todolist = todoArray.filter((value) => value.completed)
  
   let todoArray = todoList.map (
    (value) => <TodoItem content={value.content}/>
  )
  /*const todoArray = [
    <TodoItem content="Item 1"/>
    <TodoItem content="Item 2"/>
    <TodoItem content="Item 3"/>
    ]*/
  return (
    
      todoArray.filter((v)=> v.completed).map(
        (v) => <TodoItem priority={v.priority} content={v.content} completed={v.completed}/>)
    );
}

export default App;
