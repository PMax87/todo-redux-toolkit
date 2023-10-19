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
    <form onSubmit={(e) => handleSubmit(e)} className="flex">
      <input
        type="text"
        onChange={handleTextInputChange}
        value={inputText}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        {isEditing ? "Edit" : "Submit"}
      </button>
    </form>
  );
};

export default Input;
