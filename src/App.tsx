import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";


function App() {

  const [count, setCount] = useState<number>(0)

  const setCountCallback = () => {
      setCount((count:number) => count + 1);
  }

  const setResetCallback = () => setCount(0)

  const countRed = count === 5 ? 'count-red' : '';

  return (
    <div className="App">
      <div className={'count ' + countRed}>{count}</div>
      <Button className={'button'} name={'incr'} callback={setCountCallback} isDisabled={count === 5}/>
      <Button className={'button'} name={'res'} callback={setResetCallback} isDisabled={count === 0}/>
    </div>
  );
}

export default App;
