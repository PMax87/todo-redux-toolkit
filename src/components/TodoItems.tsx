import React, { ReactElement } from "react";
import { RootState } from "../redux/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/TodoReducer";

type Propstype = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const TodoItems = ({ todo, setTodo }: Propstype): ReactElement => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todos);
  const todoItem = useSelector((state: RootState) => state.todos.inputText);

  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const onEditTodo = (id: string) => {
    setTodo(todoItem);
    // dispatch(editTodo(id));
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <li>{todo.title}</li>
            <button onClick={() => onDeleteTodo(todo.id)}>Cancella</button>
            <button onClick={() => onEditTodo(todo.id)}>Edita todo</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
