import ToDoItem from "./ToDoItem"

const ToDoList = ({ todolists, onDelete, onToggle, onPress }) => {
    

  return (
    <>
        {todolists.map((item) => (
            <ToDoItem key={item.id} todoitem = {item} onDelete={onDelete} onToggle={onToggle} onPress={onPress} />
        ))}
    </>
  )
}

export default ToDoList