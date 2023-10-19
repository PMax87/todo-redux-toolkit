import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  inputText: string;
  isEditing: boolean;
  editingTodoId: string;
}

const initialState: TodoState = {
  todos: [],
  inputText: "",
  isEditing: false,
  editingTodoId: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    addTodo: (state, action: PayloadAction<string>) => {
      if (!state.isEditing) {
        state.todos.push({
          id: uuidv4(),
          title: action.payload,
          completed: false,
        });
      } else {
        const editingIndex = state.todos.findIndex(
          (todo) => todo.id === state.editingTodoId
        );
        if (editingIndex !== -1) {
          state.todos[editingIndex].title = action.payload;
          (state.todos[editingIndex].completed = false),
            (state.editingTodoId = "");
        }
        state.isEditing = false;
      }
      state.inputText = "";
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<string>) => {
      state.isEditing = true;
      state.editingTodoId = action.payload;
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      state.editingTodoId = action.payload;
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, setInputText, editTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
