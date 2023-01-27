import { useState } from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header"

const App = () => {
  const [showAddToDo, setShowAddToDo] = useState(true)

  const [todolists, setTodo] = useState ([
        {
            id: 1,
            title: "Do the homeworks.",
            deadline: 'Feb 5th at 2:30pm',
            itemStatus: 'Done',
            reminder: true,
        },
        {
            id: 2,
            title: "Fold the clothes.",
            deadline: 'Feb 7th at 2:30pm',
            itemStatus: 'Not started',
            reminder: false,
        },
        {
            id: 3,
            title: "Finalize the React assignment.",
            deadline: 'Feb 1th at 12:45pm',
            itemStatus: 'In progress',
            reminder: true,
        },
    ])

    // const [colors, setColor] = useState({ color: ['#fee9b9', '#f98a93','#93f98a' ]})

    // Add Todo
    const addToDo = (todoitem) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newToDo = {id, ...todoitem}
      setTodo([...todolists, newToDo])
    }
    // Delete Todo
    const deleteTodo = (id) => {
      setTodo(todolists.filter((todoitem) => todoitem.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTodo(todolists.map((todoitem) =>
        todoitem.id === id ? { ...todoitem, reminder: !todoitem.reminder} : todoitem
        ))
    }
    // Toggle Status
    const toggleStatus = (id) => {
      // setColor(todolists.map((todoitem) =>
      //   todoitem.id === id ? { ...todoitem, itemStatus: !todoitem.reminder} : todoitem
      //   ))
      console.log('test')
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddToDo(!showAddToDo)} showAdd={showAddToDo} title = 'Todo Tasks' />

     {showAddToDo && <AddToDo onAdd={addToDo} />}

      {todolists.length > 0 ? <ToDoList todolists={todolists} onDelete={deleteTodo}  onToggle = {toggleReminder} onPress={toggleStatus}/> : "ToDo list is Empty  "}
    </div>
  )
}

export default App;
