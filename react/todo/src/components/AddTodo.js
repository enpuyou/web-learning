import React, { Component } from "react";
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ' '
    }

    onSubmit = (e) => {
        e.preventDefault();
        // pass up the prop
        this.props.addTodo(this.state.title);
        // clear the input field
        this.setState({title: ''})

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            {/* input should be a state */}
            <input
                type="text"
                name="title"
                style={{ flex: '10', padding: '5px'}}
                placeholder="Add Todo"
                value={this.state.title}
                onChange={this.onChange}
            />
            <input
                type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
        </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
