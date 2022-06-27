export const VisibilityControl = ({
	setShowCompleted,
	showCompleted,
	clearDoneTasks,
}) => {
	const handleDelete = () => {
		if (window.confirm("Are you sure you want to delete all done tasks?")) {
			clearDoneTasks();
		}
	};

	return (
		<div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					checked={showCompleted}
					onChange={(e) => setShowCompleted(!showCompleted)}
				/>{" "}
				<label>Show tasks done</label>
			</div>
			<button className="btn btn-danger" onClick={handleDelete}>
				Clear
			</button>
		</div>
	);
};
