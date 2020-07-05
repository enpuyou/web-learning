import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      fontWeight: "bold",
      borderBottom: "1px #ccc solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      // inline style uses double curly braces
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

// prop types of todoitem is an object
TodoItem.propTypes = {
  todos: PropTypes.object,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "white",
  border: "1px solid black",
  padding: "5px 9px",
  float: "right",
  cursor: "pointer",
};

export default TodoItem;
