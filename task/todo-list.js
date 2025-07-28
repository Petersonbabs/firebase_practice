const todoInputEl = document.getElementById("todo-input")
const buttonEl = document.getElementById("add-btn")
const clearButtonEl = document.getElementById("clear-btn")
const todoListEl = document.getElementById("todo-list")
let todoArrayEl = JSON.parse(localStorage.getItem("todos")) || []

const saveTodoItem = ()=>{
    const newTodo = todoInputEl.value
    if (newTodo === "") {
        alert("add an item")
        return
    }
    
    todoArrayEl.push(newTodo)
    
    todoInputEl.value = ""
    
    localStorage.setItem("todos", JSON.stringify(todoArrayEl))

    displayTodo()
}

const displayTodo = () => {
    const todoListItems = JSON.parse(localStorage.getItem("todos")) || []

    todoListEl.innerHTML = ""

    todoListItems.forEach((ele)=>{
        todoListEl.innerHTML += `
            <li>${ele}</li>
        `
    })
    
}

displayTodo()

const clearAllTools = () =>{
    localStorage.clear()
    displayTodo()
}
buttonEl.addEventListener("click", saveTodoItem)
clearButtonEl.addEventListener("click", clearAllTools)