import React, { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ToDoList, {TodoListProps} from './components/TodoList'
import TodoItemDto from './ToDoItemDto'
import AddTodoItem, {AddTodoItemProps} from './components/AddTodoItem'
import EditTodoItem, {EditTodoItemProps} from './components/EditTodoItem'
import Container from '@material-ui/core/Container'

function App() {
  const dataItems = [
    {
      id: '1',
      label: 'Task 1',
      description: 'Want to get a coffee?'
    } as TodoItemDto,
    {
      id: '2',
      label: 'Task 2',
      description: 'Drink some tea'
    } as TodoItemDto,
    {
      id: '3',
      label: 'Task 3',
      description: 'Order new coffee',
      important: true
    } as TodoItemDto,
  ];

  const [data, setData] = useState<Array<TodoItemDto>>(dataItems);
  const addTodo = (item: TodoItemDto) => {
    setData([...data, item]);
  }
  const saveTodo = (item: TodoItemDto) => {
    const itemToChange = getItem(item.id);
    itemToChange.description = item.description;
    itemToChange.important = item.important;
    itemToChange.label = item.label;

    setData(data);
  }
  const getItem = (id: string): TodoItemDto => {
    return data.find(item => item.id === id) || new TodoItemDto(id);
  }

  const deleteItem = (id: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setData(data.filter(item => item.id !== id));
  }

  const listProps: TodoListProps = {
      items: data,
      onAdd: addTodo,
      onDelete: deleteItem
  };

  const addTodoItemProps: AddTodoItemProps = {
    onAdd: addTodo
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/items/:id" render={({match}) => (
            <Container maxWidth="sm">
              <EditTodoItem onSave={saveTodo} item={getItem(match.params.id)} />
            </Container> 
            )} >
          </Route>
          <Route path="/items">
          <Container maxWidth="sm">
            <ToDoList {...listProps} />
          </Container> 
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add">
          <Container maxWidth="sm">
            <h1> Check this out and create a new todo: </h1>
            <AddTodoItem {...addTodoItemProps}></AddTodoItem>
            </Container> 
          </Route>
        </Switch>
      </div>
    </Router>
      );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
