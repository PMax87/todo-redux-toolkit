import React from "react";
import { RootState } from "../redux/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/TodoReducer";

const TodoItems = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todos);

  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <>
            <li key={todo.id}>{todo.title}</li>
            <button onClick={() => onDeleteTodo(todo.id)}>Cancella</button>
          </>
        );
      })}
    </div>
  );
};

export default TodoItems;
