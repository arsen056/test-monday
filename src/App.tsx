import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/Counter/CounterSettings";

function App() {
  return (
    <div className="App">
      <CounterSettings />
      <Counter />
    </div>
  );
}

export default App;
