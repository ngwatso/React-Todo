import React from "react";

const Todo = (props) => {
	const handleClick = (e) => {
		e.preventDefault();
		props.toggleTask(props.item.id);
	};

	return (
		<div
			id="task-item"
			onClick={handleClick}
			className={`item${props.item.completed ? " complete" : ""}`}
		>
			<p>{props.item.name}</p>
		</div>
	);
};

export default Todo;
