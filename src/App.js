import React, { Component } from 'react';

import {observer} from 'mobx-react'

@observer
class App extends Component {

	handleAddTodo = () => {
		const task = prompt('Enter a new task for todos list')

		this.props.store.addTodo(task)
	}

	handleComplete = (todo) => () => {
		this.props.store.setComplete(todo)
	}

	render() {
		const {store} = this.props

		// console.log(store)

		return (
			<div className="App">
				<h1>
					{store.report}
				</h1>

				{
					store.todos.map((todo, idx) => {
						return (
							<li key={'task-' + idx}>
								{todo.task}

								<input
									type='checkbox'
									disabled={todo.completed}
									checked={todo.completed}
									onChange={this.handleComplete(todo)}
								/>
							</li>
						)
					})
				}

				<br/>

				<button
					onClick={this.handleAddTodo}
				>
					Add
				</button>
			</div>
		);
	}
}

export default App;
