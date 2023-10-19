import { Provider } from "react-redux";
import { store } from "./redux";
import Title from "./components/Title";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState<string>("");
  return (
    <>
      <Provider store={store}>
        <Title />
        <Input todo={todo} setTodo={setTodo} />
        <TodoItems todo={todo} setTodo={setTodo} />
      </Provider>
    </>
  );
}

export default App;
