import { Provider } from "react-redux";
import { store } from "./redux";
import Title from "./components/Title";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center">
      <Provider store={store}>
        <div className="shadow-lg p-20">
          <Title />
          <Input />
          <TodoItems />
        </div>
      </Provider>
    </div>
  );
}

export default App;
