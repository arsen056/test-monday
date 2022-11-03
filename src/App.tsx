import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import button from "./components/Button";

function App() {

  const [count, setCount] = useState<number>(0)
  const [disabledIncr, setDisabledIncr] = useState<boolean>(false)
  const [disabledRes, setDisabledRes] = useState<boolean>(true)

  const setCountCallback = () => {
      if (count === 4) setDisabledIncr(true)
      setDisabledRes(false)
      setCount(count + 1)
  }

  const setResetCallback = () => {
      setDisabledIncr(false)
      setDisabledRes(true)
      setCount(0)
  }

  const countRed = count === 5 ? 'count-red' : '';

  return (
    <div className="App">
      <div className={'count ' + countRed}>{count}</div>
      <Button className={'button'} name={'incr'} callback={setCountCallback} isDisabled={disabledIncr}/>
      <Button className={'button'} name={'res'} callback={setResetCallback} isDisabled={disabledRes}/>
    </div>
  );
}

export default App;
