import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import TodoItemDto from '../ToDoItemDto';
import { useParams } from "react-router-dom";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {Button} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Route,
    Link as RouterLink,
    useRouteMatch,
    Switch
  } from 'react-router-dom';
  
const useStylesList = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      color: 'black',
    },
    inline: {
      display: 'inline',
    },
  }),
);
export type TodoItemProps = {
    item: TodoItemDto;
    onDelete: (id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }
  
export default function TodoItem(props: TodoItemProps) {
    const classesList = useStylesList();
    const params = useParams();
    let { path, url } = useRouteMatch();
    console.log(params);
    console.log(path);
    console.log(url);
    return (
        <div>
        <ListItem alignItems="flex-start">
            <ListItemIcon>
            <FontAwesomeIcon color={props.item.important ? "red" : "black"} icon={faCoffee}></FontAwesomeIcon>
            </ListItemIcon>
            <ListItemText
            primary={props.item.label}
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classesList.inline}
                    color="textPrimary"
                >
                    {props.item.description}
                </Typography>
                {" — This is a sub heading…"}
                </React.Fragment>
            }
            />
            <ListItemSecondaryAction>
                <Button aria-label="edit" component={RouterLink} to={`${url}/${props.item.id}`}>
                    Edit
                </Button>
                <Button aria-label="delete" onClick={(e) => props.onDelete(props.item.id, e)}>
                    Delete
                </Button>
            </ListItemSecondaryAction>  
        </ListItem>
  </div>
    )
}
