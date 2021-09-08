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
  const listProps: TodoListProps = {
      items: data,
      onAdd: addTodo
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
          <Route path="/items">
            <ToDoList {...listProps} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add">
                  <h1> Check this out and create a new todo: </h1>
                  <AddTodoItem {...addTodoItemProps}></AddTodoItem>
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
