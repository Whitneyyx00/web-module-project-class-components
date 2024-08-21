import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: '' }); // Clear the input after submission
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Add a todo"
        />
        <button type="submit">Add Todo</button><br /><br />
        <button type="button" onClick={this.props.clearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
}
