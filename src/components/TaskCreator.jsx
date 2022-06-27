import React, { useState } from "react";

const TaskCreator = ({ addNewTask }) => {
	const [newTaskName, setnewTaskName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewTask(newTaskName);
		setnewTaskName("");
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="my-2 row">
				<div className="col-8">
					<input
						value={newTaskName}
						onChange={(e) => setnewTaskName(e.target.value)}
						type="text"
						placeholder="Add a task..."
						className="form-control "
					/>
				</div>
				<div className="col-4">
					<button className="btn btn-primary">Add</button>
				</div>
			</form>
		</>
	);
};

export default TaskCreator;
