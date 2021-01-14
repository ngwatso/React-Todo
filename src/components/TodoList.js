// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
	return (
		<div className="todo-list">
			{props.todo.map((item) => (
				<Todo
					toggleTask={props.toggleTask}
					key={item.id}
					item={item}
				/>
			))}
			<button
				className="clear-complete"
				onClick={(e) => props.clearCompleted()}
			>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoList;
