import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";
import { Todo, addTodo } from "../redux/TodoReducer";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todos);
  const [todo, setTodo] = useState([
    {
      id: "",
      title: "",
      completed: false,
    },
  ]);

  const handleTextInputChange = (e: any) => {
    const { value } = e.target;
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        completed: false,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(addTodo(todo));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={handleTextInputChange} />;
      <button type="submit">Invia</button>
    </form>
  );
};

export default Input;
