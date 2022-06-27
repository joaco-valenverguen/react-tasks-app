function TaskRow({ task, toggleTaskStatus, deleteTask }) {
	return (
		<tr key={task.name}>
			<td>{task.name}</td>
			<td>
				{task.status}
				<input
					onChange={() => toggleTaskStatus(task.name)}
					type="checkbox"
					checked={task.status}
				/>
			</td>
			<td>
				<button onClick={() => deleteTask(task.name)}>Delete</button>
			</td>
		</tr>
	);
}

export default TaskRow;
