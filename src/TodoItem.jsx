function TodoItem({ completed, id, title, handleTodo, handleDelete }) {
	return (
		<li>
			<label>
				<input
					type='checkbox'
					checked={completed}
					onChange={(e) => handleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button className='btn btn-danger' onClick={() => handleDelete(id)}>
				Delete
			</button>
		</li>
	)
}

export default TodoItem