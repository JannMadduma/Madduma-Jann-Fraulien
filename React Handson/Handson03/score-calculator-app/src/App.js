import "./App.css";
import CalculatorScore from "./components/CalculateScore";

function App() {
  return (
    <div className="App">
      <CalculatorScore
        name={"Jann Fraulien Madduma"}
        school={"KodeGo"}
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
