import { FaTimes } from 'react-icons/fa'

const ToDoItem = ({ todoitem, onDelete, onToggle }) => {
  return (
    <div className={`todoitem ${todoitem.reminder ? 'reminder' : ''} 
    ${todoitem.status === "Done" ? 'done' : todoitem.status === "Not started" ? "not-started" : todoitem.status === "In progress" ? "in-progress" : null} `} 
    onDoubleClick={() => onToggle(todoitem.id)} >
        <h3>
            {todoitem.title} <FaTimes style={{ color: 'red', cursor: 'pointer'}}
             onClick={() => onDelete(todoitem.id) }/>
        </h3> 
        <p>{todoitem.deadline}</p>
    </div>
  )
}

export default ToDoItem