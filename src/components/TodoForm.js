import React, { useState } from "react";
import uuid from 'react-uuid';


function TodoForm({ addTodo }) {
	//Initial state
	const [todo, setTodo] = useState({
		id: "",
		task: "",
		description: "",
		completed: false
	});
	//set State task
	function handleTaskInputChange(e) {
		setTodo({...todo, task: e.target.value});
	}

	function handleDescriptionInputChange(e) {
		setTodo({...todo, description: e.target.value});
	}

	//Submit
	function handleSubmit(e) {
		e.preventDefault();
		if (todo.task.trim()) {
			addTodo({...todo, id: uuid() });
			//reset inputs
			setTodo({...todo, task:"", description:"" });
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				name="task"
				type="text"
				value={todo.task}
				onChange={handleTaskInputChange}
				placeholder="Task"
			/>
			<textarea 
				name="description"
				type="text"
				value={todo.description}
				onChange={handleDescriptionInputChange}
				cols="30" rows="10"
				placeholder="Description (optional)"></textarea>
			<button type="submit">Submit</button>
		</form>
	)
}

export default TodoForm;