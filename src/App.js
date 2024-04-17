import "./App.css";
import Input from "./component/Input";
import Button from "./component/Button";
import Clear from "./component/Clear";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
  };

  const handleCalculate = () => {
    setInput(eval(input));
  };

  function handleClear() {
    setInput("");
  }

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button onHandleClick={handleClick}>7</Button>
          <Button onHandleClick={handleClick}>8</Button>
          <Button onHandleClick={handleClick}>9</Button>
          <Button onHandleClick={handleClick}> /</Button>
        </div>
        <div className="row">
          <Button onHandleClick={handleClick}>4</Button>
          <Button onHandleClick={handleClick}>5</Button>
          <Button onHandleClick={handleClick}>6</Button>
          <Button onHandleClick={handleClick}>*</Button>
        </div>
        <div className="row">
          <Button onHandleClick={handleClick}>1</Button>
          <Button onHandleClick={handleClick}>2</Button>
          <Button onHandleClick={handleClick}>3</Button>
          <Button onHandleClick={handleClick}>+</Button>
        </div>
        <div className="row">
          <Button onHandleClick={handleClick}>.</Button>
          <Button onHandleClick={handleClick}>0</Button>
          <Button onHandleClick={handleCalculate}>=</Button>
          <Button onHandleClick={handleClick}>-</Button>
        </div>
        <div className="row">
          <Clear onHandleClear={handleClear} />
        </div>
      </div>
    </div>
  );
}

export default App;
