import ToDoItem from "./ToDoItem"

const ToDoList = ({ todolists, onDelete, onToggle }) => {
    

  return (
    <>
        {todolists.map((item) => (
            <ToDoItem key={item.id} todoitem = {item} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </>
  )
}

export default ToDoList