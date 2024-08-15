import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [userInput, setUserInput] = useState("")
	const [todo, setTodos] = useState([])
	const addToDo = (e)=>{
		if (e.key==="Enter"||e==="click"){
			let thisToDo = {label:userInput, done:false}
			setTodos([...todo, thisToDo])
			setUserInput("")
		}
		
	}
	const deleteTodo =(i) => {
	let newTodos = todo.filter ((todo, index)=> index!==i)
	setTodos(newTodos)
	}
	return (
		<div className="text-center">
			<input type="text"onChange={(e)=>setUserInput(e.target.value)} value = {userInput} onKeyDown={(e)=> addToDo(e)} />
			<button onClick={()=> addToDo("click")}>add to to-do list</button>
			<ul>
				{
					todo?.map((todo, index)=>(
						<div>
						<li key = {index}>{todo.label}</li>	
						<button onClick={()=>deleteTodo(index)}>X</button>
						
						</div>
						
					))
				}
			</ul>
		</div>
	);
};

export default Home;
