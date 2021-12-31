import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  // const handleClick = (id) =>
  //   dispatch({
  //     type: "DELETE_TODO",
  //     payload: id,
  //   });
  const deletTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.label}
          <button onClick={() => deletTodo(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (event) => setNewTodo(event.target.value);
  const handleClick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,

        id: Math.ceil(Math.random() * 100),
      },
    });

  return (
    <>
      <h1>Todos app</h1>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>add</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
