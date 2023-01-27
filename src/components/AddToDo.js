import Select from 'react-select'
import { useState } from "react";

const AddToDo = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')
    const [status, setStatus] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Please Add Todo')
            return
        }

        onAdd({ title, deadline, status, reminder })
        setTitle('')
        setDeadline('')
        setStatus('')
        setReminder(false)
    }

    const options = [
        { value: 'Done', label: 'Done' },
        { value: 'Not started', label: 'Not started' },
        { value: 'In progress', label: 'In progress' }
    ]

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <label>Add new todo</label>
        <div className="form-control">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-control">
            <input type="text" placeholder="Deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </div>
        <div className="form-control">
            <Select options={options} onChange={(status) => setStatus(status.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value='Save Todo' className='btn btn-block' />
    </form>
  )
}

export default AddToDo