import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setInputText } from "../redux/TodoReducer";
import { RootState } from "../redux";

const Input = () => {
  const dispatch = useDispatch();
  const inputText = useSelector((state: RootState) => state.todos.inputText);
  const isEditing = useSelector((state: RootState) => state.todos.isEditing);

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setInputText(value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(inputText));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={handleTextInputChange} value={inputText} />;
      <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
    </form>
  );
};

export default Input;
