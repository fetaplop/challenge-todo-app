import React, { Component } from 'react';

import './App.css';
import AddTodoForm from './AddTodoForm';
import todoService from "./lib/services"

class App extends Component {
  state = {
    todos: [] // get these from server  
  }

  componentDidMount() {
    // get all todos from server and setstate

    todoService.getAll()
    .then(todosFromServer => {
      console.log('todosFromServer', todosFromServer)
      this.setState({todos: todosFromServer})
    } )
    .catch(err => {console.log('error from trying to get todos from server', err)})
  }

  // new func to add a todo

  addNewTodo = (todo) => {
    console.log('addNewTodo t,odo inside app.js', todo)
    //send it to server!!
    todoService.createNew(todo)
    // this doe s not work

    
    let copyTodos = this.state.todos
    // push new to the array copy
    copyTodos.push(todo)
    // then set the state with new updated todo list
    this.setState({todos: copyTodos})
    //given more time, we should prevent the user from deleting the new todo before it is added to the server
  }

  // func to delete todo

  //BACKLOG
  //func update todo
  // "done" functionality

  render() {

    let todoList = this.state.todos;

    return (
      <div className="App">

        {/* give func as this.props.! */}
        <AddTodoForm addNewTodo={this.addNewTodo} /> 
        

        <h4>Your todo list:</h4>
        {todoList.map((todo, key) => {
          console.log('todo:', todo)
          // should add the key for each item for react
          return <p> {todo.title} </p>
        } )}
      </div>
    );
  }
}

export default App;
