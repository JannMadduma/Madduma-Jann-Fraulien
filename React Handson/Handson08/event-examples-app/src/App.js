import logo from "./logo.svg";
import "./App.css";
import ConvertCurrency, {
  IncrementDecrement,
} from "./component/ConvertCurrency";

function App() {
  return (
    <div className="App">
      <IncrementDecrement />
      <hr />
      <ConvertCurrency />
    </div>
  );
}

export default App;
