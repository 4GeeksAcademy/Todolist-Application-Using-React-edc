import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [userInput, setUserInput] = useState("")
	const [todo, setTodos] = useState([])
	const addToDo = (e) => {
		if ((e.key === "Enter" || e === "click") && userInput.trim() !== "" ) {
			let thisToDo = { label: userInput, done: false }
			setTodos([...todo, thisToDo])
			setUserInput("")
		}

	}
	const deleteTodo = (i) => {
		let newTodos = todo.filter((todo, index) => index !== i)
		setTodos(newTodos)
	}
	return (
		<div className="text-center container">
			<h1 className="text-center">To-do's</h1>
			<div className="card mx-auto mt-2" style={{ maxWidth: "800px" }}>

				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex align-items-center justify-content-center">
						<input type="text" onChange={(e) => setUserInput(e.target.value)} value={userInput} onKeyDown={(e) => addToDo(e)} />
						<button className="btn btn-dark btn-sm ms-2" onClick={() => addToDo("click")}>add to to-do list</button>
					</li>
					{todo.length === 0 ? (
						<li className="list-group-item">
							No task, add a task
						</li>
					) : (
						todo.map((todo, index) => (
							<li className="list-group-item" key={index}>
								<div className="list-group-item-todo" id="screen">{todo.label}</div>
								<span className="x-container" onClick={() => deleteTodo(index)}>
									<i className="fa-solid fa-x"></i>
								</span>
							</li>
						))
					)

					}
				</ul>
				<div className="card-footer text-secondary">
					{todo.length} {todo.length === 1?"item" : "items"} left
				</div>
			</div>

		</div>
	);
};

export default Home;
