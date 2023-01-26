import { useState } from "react";

import ToDoList from "./components/ToDoList";
import Header from "./components/Header"

const App = () => {
  const [todoitems, setTodo] = useState ([
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
  return (
    <div className="container">
      <Header title = 'Todo Tasks' />
      <ToDoList todoitems={todoitems}/>
    </div>
  )
}

export default App;
