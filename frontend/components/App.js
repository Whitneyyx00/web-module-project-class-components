import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { name: 'Organize Garage', id: 1528817077286, completed: false },
        { name: 'Bake Cookies', id: 1528817084358, completed: false }
      ],
      newTodo: ''
    };
  }

  addTodo = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div className="todos">
          <h2>Todos:</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        </div>
        <Form
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
