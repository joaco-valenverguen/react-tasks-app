import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
	const [tasksList, setTasksList] = useState([]);

	const [showCompleted, setShowCompleted] = useState(false);

	const addNewTask = (task) => {
		if (!tasksList.find((taska) => taska.name === task) && task !== "") {
			setTasksList([...tasksList, { name: task, status: false }]);
			console.log(tasksList);
		}
	};

	const clearDoneTasks = () => {
		setTasksList(tasksList.filter((task) => !task.status));
		setShowCompleted(false);
	};

	useEffect(() => {
		let data = localStorage.getItem("tasksList");
		if (data) {
			setTasksList(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasksList", JSON.stringify(tasksList));
	}, [tasksList]);

	return (
		<main className="bg-dark vh-100 text-white">
			<Container className="text-center">
				<TaskCreator addNewTask={addNewTask} />
				<TaskTable
					title="Todo tasks"
					tasksList={tasksList.filter(
						(task) => task.status === false
					)}
					setTasksList={setTasksList}
				/>

				<VisibilityControl
					showCompleted={showCompleted}
					setShowCompleted={setShowCompleted}
					clearDoneTasks={clearDoneTasks}
				/>
				{showCompleted && (
					<TaskTable
						title="Done tasks"
						tasksList={tasksList.filter(
							(task) => task.status === true
						)}
						setTasksList={setTasksList}
					/>
				)}
			</Container>
		</main>
	);
}

export default App;
