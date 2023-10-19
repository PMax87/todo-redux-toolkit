import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoReducer";

type Propstype = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ todo, setTodo }: Propstype): ReactElement => {
  const dispatch = useDispatch();

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={handleTextInputChange} value={todo} />;
      <button type="submit">Invia</button>
    </form>
  );
};

export default Input;
