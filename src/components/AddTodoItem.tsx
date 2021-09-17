import { FormEvent, useState } from 'react'
import {TodoItemDto} from '../ToDoItemDto';
import {v4 as uuid} from 'uuid'

export type AddTodoItemProps = {
    onAdd: (item: TodoItemDto) => void;
  }

const AddTodoItem = (props: AddTodoItemProps) => {
  const [description, setDescription] = useState<string>('')
  const [label, setLabel] = useState<string>('')
  const [important, setImportant] = useState<boolean>(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!label) {
      alert('Please add a label')
      return
    }

    const item = {id: uuid(), description, important, label};
    props.onAdd(item)

    setDescription('')
    setLabel('')
    setImportant(false)
  }

  return (
    <div>
      <form className='add-form' onSubmit={onSubmit}>
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

export default AddTodoItem
