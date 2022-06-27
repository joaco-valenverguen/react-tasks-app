import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasksList, setTasksList, title }) => {
	const toggleTaskStatus = (name) => {
		setTasksList(
			JSON.parse(localStorage.getItem("tasksList")).map((task) => {
				if (task.name === name) {
					task.status = !task.status;
				}
				return task;
			})
		);
	};

	const deleteTask = (name) => {
		setTasksList(
			JSON.parse(localStorage.getItem("tasksList")).filter(
				(task) => task.name !== name
			)
		);
	};
	return (
		<>
			<table className="table table-dark table-striped table-bordered border-secondary">
				<thead>
					<tr className="table-primary">
						<th>{title}</th>
						<th>Status</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{tasksList.map((task, index) => (
						<TaskRow
							key={index}
							task={task}
							toggleTaskStatus={toggleTaskStatus}
							deleteTask={deleteTask}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TaskTable;
