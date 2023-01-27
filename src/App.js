import { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header"

const App = () => {
  const [showAddToDo, setShowAddToDo] = useState(false)

  const [todolists, setTodo] = useState ([])

  useEffect(() => {
    const getTodoLists = async () => {
      const todoFromServer = await fetchTodo()
      setTodo(todoFromServer)
    }

    getTodoLists()
  }, [])

  // Get Todo
  const fetchTodo = async () => {
      const res = await fetch('http://localhost:5000/ToDoLists')
      // .then(response => response.json())
      .then({ "message": "Hello, this is get response" })

      const data = await res.json()

      return data
    }

     // Update Todo
  const updateTodo = async (id) => {
      const res = await fetch(`http://localhost:5000/ToDoLists/${id}`)
      // .then(response => response.json())
      .then({ "message": "Hello, this is get response" })

      const data = await res.json()

      return data
    }

    // Add Todo
    const addToDo = async(todoitem) => {
      const res = await fetch ('http://localhost:5000/ToDoLists', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(todoitem)
      })
      .then({ "message": "Hello, this is post response" })
      

      const data = await res.json()
      
      
      setTodo([...todolists, data])
      // const id = Math.floor(Math.random() * 10000) + 1
      // const newToDo = {id, ...todoitem}
      // setTodo([...todolists, newToDo])
    }
    // Delete Todo
    const deleteTodo = async (id) => {

      await fetch(`http://localhost:5000/ToDoLists/${id} `,{
        method: 'DELETE'
      })
      .then(response => response.json())
      .then({ "message": "Hello, this is delete response" })
       
      setTodo(todolists.filter((todoitem) => todoitem.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
      const todoToToggle = await updateTodo(id)
      const updateItem = {...todoToToggle,
      reminder: !todoToToggle.reminder}

      const  res = await fetch (`http://localhost:5000/ToDoLists/${id} `,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updateItem)
      })

      const data = await res.json()
      console.log(data)

      setTodo(todolists.map((todoitem) =>
        todoitem.id === id ? { ...todoitem, reminder: !data.reminder} : todoitem
        ))
    }
    // Toggle Status
    // const toggleStatus = (id) => {
    //   // setColor(todolists.map((todoitem) =>
    //   //   todoitem.id === id ? { ...todoitem, itemStatus: !todoitem.reminder} : todoitem
    //   //   ))
    //   console.log('test')
    // }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddToDo(!showAddToDo)} showAdd={showAddToDo} title = 'Todo Tasks' />

     {showAddToDo && <AddToDo onAdd={addToDo} />}

      {todolists.length > 0 ? <ToDoList todolists={todolists} onDelete={deleteTodo}  onToggle = {toggleReminder} /> : "ToDo list is Empty  "}

      <div className="todoitem-app">
        <span className="todoitem done">Done</span>
        <span className="todoitem not-started ">Not started</span>
        <span className="todoitem in-progress">In progress</span>
      </div>
    </div>
  )
}

export default App;
