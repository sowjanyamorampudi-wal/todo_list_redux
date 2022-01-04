import { deletTodo, updateTodo } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const Todos = ({ newTodo, setNewTodo }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [update, setUpdate] = useState(false);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.label}
          <button onClick={() => dispatch(deletTodo(todo.id))}>delete</button>
          {update ? (
            <button
              onClick={() => {
                dispatch(updateTodo(newTodo, todo.id));
                setNewTodo("");
                setUpdate(false);
              }}
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => {
                setNewTodo(todo.label);
                setUpdate(true);
              }}
            >
              edit
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };

export default Todos;
