import React, { useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ToDoList, {TodoListProps} from './components/TodoList'
import ToDoItem from './components/TodoItem'
import TodoItemDto from './ToDoItemDto';


function App() {
  const dataItems = [
    {
      label: 'Task 1',
      description: 'Want to get a coffee?'
    } as TodoItemDto,
    {
      label: 'Task 2',
      description: 'Drink some tea'
    } as TodoItemDto,
    {
      label: 'Task 3',
      description: 'Order new coffee',
      important: true
    } as TodoItemDto,
  ];

  const [data, setData] = useState<Array<TodoItemDto> | undefined>(dataItems);
  const addTodo = (item: TodoItemDto) => {
    setData([...dataItems, item]);
  }
  const listProps: TodoListProps = {
      items: data,
      onAdd: addTodo
  };
  
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
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/items/:id">
            <ToDoItem />
          </Route>
          <Route path="/items">
            <ToDoList {...listProps} />
          </Route>
          <Route path="/" exact>
            <Home />
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
