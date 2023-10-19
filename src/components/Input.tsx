import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoReducer";

const Input = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>("");

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
