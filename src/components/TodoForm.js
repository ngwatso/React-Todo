import React, { Component } from "react";

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			itemName: "",
		};
	}

	// ! update state with each keystroke
	handleChanges = (e) => {
		this.setState({ itemName: e.target.value });
	};

	// ! submit form
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.itemName);
	};

	// ! render form
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChanges}
					value={this.state.itemName}
					type="text"
					name="item"
				/>
				<button>Add List Item</button>
			</form>
		);
	}
}

export default TodoForm;
