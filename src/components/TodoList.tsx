import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoItem from './TodoItem'
import TodoItemDto from '../ToDoItemDto';

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
        return (
        <div>
            <List className={classesList.root}>
              {items?.map((item, index) => (
                <TodoItem key={index} label={item.label} description={item.description} important={item.important} />
              ))}              
              <Divider variant="inset" component="li" />
            </List>              
            <Button className={classesButton.root} color="primary">Add</Button>
        </div>
    )
}
