import { Provider } from "react-redux";
import { store } from "./redux";
import Title from "./components/Title";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <>
      <Provider store={store}>
        <Title />
        <Input />
        <TodoItems />
      </Provider>
    </>
  );
}

export default App;
