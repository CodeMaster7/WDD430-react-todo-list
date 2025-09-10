import TodoItem from './TodoItem'

function TodoList({ todos, handleTodo, handleDelete }) {
	return (
		<ul className='list'>
			{todos.length === 0 && <li>No todos</li>}
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} handleTodo={handleTodo} handleDelete={handleDelete} />
			))}
		</ul>
	)
}

export default TodoList