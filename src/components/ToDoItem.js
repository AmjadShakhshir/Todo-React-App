import { FaTimes } from 'react-icons/fa'

const ToDoItem = ({todoitem}) => {
  return (
    <div className="todoitem">
        <h3>
            {todoitem.title} <FaTimes style={{ color: 'red', cursor: 'pointer'}}/>
        </h3> 
        <p>{todoitem.deadline}</p>
    </div>
  )
}

export default ToDoItem