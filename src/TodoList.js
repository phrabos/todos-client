import React, { Component } from 'react'
import { getTodos, addTodo, deleteTodo } from './api-utils';

export default class TodoListPage extends Component {
    state = {
        todos: [],
        todo: '',
        completed: false,
    }

    componentDidMount = async () => {
        await this.fetchTodos();
    }
    
    fetchTodos = async () => {
        const todos = await getTodos(this.props.token);

        this.setState({todos})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await addTodo(this.state.todo, this.props.token);
        await this.fetchTodos();
        this.setState({todo: ''})
    }

    handleTodoChange = (e) => {
        this.setState({todo: e.target.value},)
    }

    handleDelete = async (todoId) => {

        await deleteTodo(todoId, this.props.token);
        await this.fetchTodos();
    }

    render() {
        return (
            <div>
                <h3>Todo List Page</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todo} onChange={this.handleTodoChange} />
                    <button>Add todo</button>
                </form>
                {this.state.todos.map(todo => 
                    <div className='todo-list'>
                    <p 
                        key={`${todo.todo}-${todo.id}`}
                        onClick={() => this.handleComplete(todo.id)}
                        className={`
                            todo ${todo.completed
                            ? 'completed'
                            : ''}`
                        }>
                        {todo.todo}
                    </p>
                    <button 
                    key={`${todo.todo}`}
                    className='delete'
                    onClick={() => this.handleDelete(todo.id)}
                    >
                    X
                    </button>

                    </div>
                )}

            </div>
        )
    }
}
