import { Provider } from "react-redux";
import { store } from "./redux";
import Title from "./components/Title";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Provider store={store}>
        <Title />
        <Input />
      </Provider>
    </>
  );
}

export default App;
