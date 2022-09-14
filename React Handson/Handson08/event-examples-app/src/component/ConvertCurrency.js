import React, { useState } from "react";

export function IncrementDecrement() {
  const [count, setCount] = useState(0);

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const clickMe = (msg) => {
    alert(msg);
  };

  const stateCount = (msg) => {
    alert(`State of count ${count}`);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button
        className="btn"
        onClick={() => {
          stateCount();
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <button
        className="btn"
        onClick={() => {
          stateCount();
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <br />
      <button className="btn" onClick={() => sayWelcome("welcome")}>
        Say Welcome
      </button>
      <br />
      <button
        className="btn"
        type="button"
        onClick={() => clickMe("I was clicked")}
      >
        Click On Me
      </button>
      <br />
    </div>
  );
}

function ConvertCurrency() {
  const [val, setName] = useState(0);
  var usd = 0.018;
  const handleSubmit = (event) => {
    setName(event.target.value);
  };
  const logValue = (e) => {
    e.preventDefault();
    alert("Converting to USD Amount is " + val * usd);
  };
  return (
    <div>
      Amount: <input type="number" onChange={handleSubmit} />
      <br />
      Currency: <textarea value="Ph to USD" />
      <br />
      <button className="btn" onClick={logValue}>
        Submit
      </button>
    </div>
  );
}
export default ConvertCurrency;
