import ToDoItem from "./ToDoItem"

const ToDoList = ({todoitems}) => {
    

  return (
    <>
        {todoitems.map((item) => (
            <ToDoItem key={item.id} todoitem = {item}/>
        ))}
    </>
  )
}

export default ToDoList