import React from 'react'

function Form( {propSetInputText, propInputText, propTodos, propSetTodos , setStatus} ) {
    function inputTextHandler(event) {
        propSetInputText(event.target.value)
    };

function submitTodoHandler(event) {
    event.preventDefault();
    propSetTodos([
        ...propTodos,
         {text: propInputText, completed: false, id: Math.random() * 1000}
    ]);
    propSetInputText("")
}

function statusHandler(event) {
     setStatus(event.target.value)
}

// function statusIncomplete(event) {
//     setStatus(propTodos.filter(item) =>)
// }

// function filterTodos() {
//     setFilteredTodos()
// }



    return (
        <form>
            <input value={propInputText} onChange ={inputTextHandler}type="text" className="todo-input"/>
            <button onClick={submitTodoHandler}className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
);
}

export default Form
