import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./actions";
import Todos from "./Todo";
const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const [id, setId] = useState(1);

  const handleChange = (event) => setNewTodo(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    setNewTodo("");
  };

  return (
    <>
      <h1>Todos app</h1>
      <form onSubmit={submitHandler}>
        <input value={newTodo} onChange={handleChange} type="text" />
        <input
          type="submit"
          value="ADD"
          onClick={() => {
            dispatch(addTodo(newTodo, id));
            setId(id + 1);
          }}
        />
      </form>
      <Todos newTodo={newTodo} setNewTodo={setNewTodo} />
    </>
  );
};
export default TodoInput;
