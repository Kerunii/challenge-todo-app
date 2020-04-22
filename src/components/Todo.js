import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
	//checkbox
	function handleCheckboxClick() {
		toggleComplete(todo.id);
	}

	//Remove
	function handleRemoveClick() {
		removeTodo(todo.id);
	}

	return (
		<div className="todo">
			<li>
			<div>
			<input type="checkbox" onClick={handleCheckboxClick} />
			<h3 style={{ textDecoration: todo.completed ? "line-through" : null }}>{todo.task}</h3>
			<button onClick={handleRemoveClick} >X</button>
			</div>
			<p>{todo.description}</p>
			</li>
		</div>	
	)
}

export default Todo;