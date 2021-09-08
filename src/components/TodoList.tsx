import React, {useState} from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import TodoItem from './TodoItem'
import TodoItemDto from '../ToDoItemDto'
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink,
  useRouteMatch,
  Switch
} from 'react-router-dom';
import AddTodoItem, {AddTodoItemProps} from './AddTodoItem'

export type TodoListProps = {
  items?: Array<TodoItemDto>;
  onAdd: (item: TodoItemDto) => void;
}

const useStylesList = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
      color: 'black',
    },
    inline: {
      display: 'inline',
    },
  }),
);

const useStylesButton = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  }),
);

  
export default function ToDoList({items = undefined, onAdd = (item: TodoItemDto) => {}} :TodoListProps) {
    const classesButton = useStylesButton();
    const classesList = useStylesList();
    let { path, url } = useRouteMatch();
    const addTodoItemProps: AddTodoItemProps = {
      onAdd: onAdd
    }
    const [myItems, setMyItems] = useState<Array<TodoItemDto> | undefined>(items);

    return (
        <div>
            <List className={classesList.root}>
              {myItems?.map((myItem, index) => (
                <TodoItem item={myItem} />
              ))}              
              <Divider variant="inset" component="li" />
            </List>
            <Button className={classesButton.root} color="primary" component={RouterLink} to="/add">Add</Button> 
      </div>
    )
}
