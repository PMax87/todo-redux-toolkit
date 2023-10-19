import { RootState } from "../redux/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, setInputText } from "../redux/TodoReducer";

const TodoItems = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos.todos);

  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const getTodoById = (todoId: string, todoTitle: string) => {
    dispatch(editTodo(todoId));
    dispatch(setInputText(todoTitle));
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <li>{todo.title}</li>
            <button onClick={() => onDeleteTodo(todo.id)}>Cancella</button>
            <button onClick={() => getTodoById(todo.id, todo.title)}>
              Edita todo
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
