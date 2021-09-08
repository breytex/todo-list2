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

export default function TodoItem({label = 'Task', description = 'none', important = false}: TodoItemDto) {
    const classesList = useStylesList();
    const params = useParams();
    console.log(params);
    return (
        <div>
        <ListItem alignItems="flex-start">
        <ListItemIcon>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </ListItemIcon>
    <ListItemText
      primary={label}
      secondary={
        <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            className={classesList.inline}
            color="textPrimary"
          >
            {description}
          </Typography>
          {" — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
      }
    />
  </ListItem>
  </div>
    )
}
