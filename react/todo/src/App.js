import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios'
import { v4 as uuid } from 'uuid';


class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
      response => this.setState({todos: response.data}))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
      )
    }
    )
  }

  deleteTodo = (id) => {
    // this.setState({
    //   // todos: this.state.todos.filter(todo => todo.id !== id)
    //   todos: [...this.state.todos.filter(
    //       todo => todo.id !== id
    //     )]
    // }
    // )
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => this.setState({
      // todos: this.state.todos.filter(todo => todo.id !== id)
      todos: [...this.state.todos.filter(
          todo => todo.id !== id
        )]
    }
    ))
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   title: title,
    //   completed: false
    // }
    // this.setState({
    //   // todos: this.state.todos.filter(todo => todo.id !== id)
    //   todos: [...this.state.todos, newTodo] });
    
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, completed: false
    }).then(response => this.setState({todos: [...this.state.todos, response.data] }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>

                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
