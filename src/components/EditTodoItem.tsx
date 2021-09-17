import { FormEvent, useState } from 'react'
import {TodoItemDto} from '../ToDoItemDto';

export type EditTodoItemProps = {
  item: TodoItemDto;
  onSave: (item: TodoItemDto) => void;
}

const EditTodoItem = ({item, onSave}: EditTodoItemProps) => {
  const [description, setDescription] = useState(item.description)
  const [label, setLabel] = useState(item.label)
  const [important, setImportant] = useState(item.important)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!label) {
      alert('Please add a label')
      return
    }

    const editedItem = {id: item.id, label, description, important};
    onSave(editedItem)
  }

  return (
    <div>
      <h1> Hey, you want to edit me? Let's go! </h1>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Id={item.id}</label>
        </div>
        <div className='form-control'>
          <label>Task</label>
          <input
            type='label'
            placeholder='Add a label like "my nice task"'
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Add a description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-control form-control-check'>
          <label>Important?</label>
          <input
            type='checkbox'
            checked={important}
            onChange={(e) => setImportant(e.currentTarget.checked)}
          />
        </div>

        <input type='submit' value='Save Item' className='btn btn-block' />
      </form>
    </div>
  )
}

export default EditTodoItem
