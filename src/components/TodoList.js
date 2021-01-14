// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
	return (
		<div className="todo-list">
			<div className="list">
				{props.todo.map((item) => (
					<Todo
						toggleTask={props.toggleTask}
						key={item.id}
						item={item}
					/>
				))}
			</div>
			<div className="button">
				<button
					className="clear-complete"
					onClick={(e) => props.clearCompleted()}
				>
					Clear Completed
				</button>
			</div>
		</div>
	);
};

export default TodoList;
