import { FaTimes } from 'react-icons/fa'

const ToDoItem = ({ todoitem, onDelete, onToggle, onPress }) => {
  return (
    <div className={`todoitem ${todoitem.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(todoitem.id)} onClick={() => onPress(todoitem.id)}>
        <h3>
            {todoitem.title} <FaTimes style={{ color: 'red', cursor: 'pointer'}}
             onClick={() => onDelete(todoitem.id) }/>
        </h3> 
        <p>{todoitem.deadline}</p>
    </div>
  )
}

export default ToDoItem