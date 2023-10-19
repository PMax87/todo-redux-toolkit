import { Provider } from "react-redux";
import { store } from "./redux";
import Title from "./components/Title";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <div className="h-[100vh] flex flex-col items-center mt-10">
      <Provider store={store}>
        <div className="shadow-lg p-10">
          <Title />
          <Input />
          <TodoItems />
        </div>
      </Provider>
    </div>
  );
}

export default App;
