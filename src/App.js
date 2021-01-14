import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const todo = [{ name: "dishes", id: "1234", completed: false }];
class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor() {
		super();
		this.state = {
			todo: todo,
		};
	}

	addTask = (task) => {
		this.setState({
			todo: [
				...this.state.todo,
				{ name: task, id: Date.now(), completed: false },
			],
		});
	};

	toggleTask = (taskId) => {
		this.setState({
			todo: this.state.todo.map((item) => {
				if (item.id === taskId) {
					return { ...item, completed: !item.completed };
				}
				return item;
			}),
		});
	};

	clearCompleted = () => {
		this.setState({
			todo: this.state.todo.filter((item) => {
				return !item.completed;
			}),
		});
	};

	render() {
		return (
			<div className="App">
				<div className="header">
					<h2>To Do List</h2>
					<TodoForm addTask={this.addTask} />
				</div>
				<div className="task-list-container">
					<TodoList
						clearCompleted={this.clearCompleted}
						toggleTask={this.toggleTask}
						todo={this.state.todo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
