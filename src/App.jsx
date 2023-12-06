import { useState } from "react"
import TodpApp from "./TodoApp/TodpApp"

import './App.css'
function App() {
const [input, setInput] = useState('')
const [todos, setTodos] = useState([])
const [isEdite, setIsEdite] = useState(false)
const [updateId, setUpdateId] = useState(0)
const [compliteTodo, setCompliteTodo] = useState()
// const [disable, setDisable] = useState(true)
// console.log(input);

  const handleInput = (e) => {
    setInput(e.target.value)
}

  // Add Todo
  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput('')
    // console.log();
  }

 // Delete Todo 
 const deleteTodo = (id) => {
  const filteredTodo = todos.filter((todo, index) => index !== id);
  setTodos(filteredTodo)
  // console.log(filteredTodo);
 }

 // Edite Todo
 const getData = (id) => {
  const findTodo = todos.find((todo, index) => index === id)
  setInput(findTodo)
  setIsEdite(true)
  // console.log(findTodo);
 }

  //Update Todo
  const updateTodo = (e) => {
    e.preventDefault()
    todos[updateId] = input
    setInput('')
    setIsEdite(false)
  }

  // Complite todo 
  const complitetask = () => {
    const complitefind = todos.find((todo, index) => index === id)
    setCompliteTodo(complitefind)
  }



  return (
    <>
      <div>
        <h1>Task Managment</h1>
        <div className="inputBox">
         <form onSubmit=
        //  {isEdite ? updateTodo : addTodo} 
         {isEdite ? updateTodo : addTodo}
         action="">
          <input type="text" 
            value={input}
            onChange={handleInput}
            placeholder='Add your Todo' />
            <button>{isEdite ? "Update" : "Add"}</button>
         </form>

         {
           todos.map((todo, index) => <TodpApp key={index} todo={todo} index={index} deleteTodo={deleteTodo} getData={getData} complitetask={complitetask} />)
         }
        </div>
      </div>
    </>
  )
}

export default App
