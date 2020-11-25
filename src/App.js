import React, {useState , useEffect} from "react";
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"


function App() {


//State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status , setStatus] = useState("all")
  const [filteredTodos , setFilteredTodos] = useState([]) //what we will render out in end when filtering for status

    //USE EFFECT
    useEffect(() => {
      filterHandler()

    }, [todos , status]);

//Functions
  function filterHandler() {
    switch(status) {
        case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true)) //if state "status" =completed then change state of filteredTodos to contain todos that state is completed. We need to use filter to loop through the array and check each item in array and if it's status is completed to pull it out and add to filteredTodos array
      break;
    case "uncompleted":
      setFilteredTodos(todos.filter(todo => todo.completed === false)) //if state "status" =uncompleted then change state of filteredTodos to contain todos that state is uncompleted. We need to use filter to loop through the array and check each item in array and if it's status is uncompleted to pull it out and add to filteredTodos array
    break;
    default:
      setFilteredTodos(todos)
  }
  }

  return (
    <div className="App">
    <header>
  <h1>Shopping List</h1>
    </header>
    <div className="form-component">
      <Form
        propInputText={inputText}
        propTodos={todos}
        propSetTodos={setTodos}
        propSetInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}/>


      </div>
    </div>
  )
}

export default App;
