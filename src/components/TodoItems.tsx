import { RootState } from "../redux/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  editTodo,
  setInputText,
} from "../redux/TodoReducer";

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

  const onCompletedTodo = (id: string) => {
    dispatch(completeTodo(id));
  };

  if (todoList.length < 1) {
    return (
      <div className="container">
        <h4>No Todo Item</h4>
      </div>
    );
  }

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-between my-5 items-center">
            <input
              type="checkbox"
              name="completed"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={todo.completed}
              onChange={() => onCompletedTodo(todo.id)}
            />
            <p className={`${todo.completed === false ? "" : "line-through"}`}>
              {todo.title}
            </p>
            <div className="container w-1/3 flex justify-end">
              <button onClick={() => onDeleteTodo(todo.id)}>Cancella</button>
              <button onClick={() => getTodoById(todo.id, todo.title)}>
                Edita todo
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
