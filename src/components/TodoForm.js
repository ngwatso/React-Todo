import React, { Component } from "react";

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			task: "",
		};
	}

	// ! update state with each keystroke
	handleChanges = (e) => {
		this.setState({ task: e.target.value });
	};

	// ! submit form
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTask(this.state.task);
	};

	// ! render form
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-container">
					<div className="input">
						<input
							onChange={this.handleChanges}
							value={this.state.task}
							type="text"
							name="item"
						/>
					</div>
					<div className="header-button">
						<button>Add List Item</button>
					</div>
				</div>
			</form>
		);
	}
}

export default TodoForm;
