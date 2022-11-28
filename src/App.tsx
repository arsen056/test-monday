import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/Counter/CounterSettings";

function App() {

  const [minValue, setMinValue] = useState<number>(0)

  const [maxValue, setMaxValue] = useState<number>(5)

  const [message, setMessage] = useState<string>('')

  const [error, setError] = useState<string>('')

  const [count, setCount] = useState<number>(minValue)

  const increment = () => setCount(count + 1)

  const reset = () => setCount(minValue)

  useEffect(() => {
    const valueAsString = localStorage.getItem('counterValue')
    const minValueAsString = localStorage.getItem('counterMinValue')
    const maxValueAsString = localStorage.getItem('counterMaxValue')
    const message = localStorage.getItem('message')
    const errorMessage = localStorage.getItem('errorMessage')
    if (valueAsString && minValueAsString && maxValueAsString && message && errorMessage) {
      const newValue = JSON.parse(valueAsString)
      const newMinValue = JSON.parse(minValueAsString)
      const newMaxValue = JSON.parse(maxValueAsString)
      const messageValue = JSON.parse(message)
      const errorMessageValue = JSON.parse(errorMessage)
      setCount(newValue)
      setMinValue(newMinValue)
      setMaxValue(newMaxValue)
      setMessage(messageValue)
      setError(errorMessageValue)
    }
  }, [])

  useEffect(() => {
    setToLS()
  }, [count, maxValue, minValue])

  const setToLS = () => {
    localStorage.setItem('counterValue', JSON.stringify(count))
    localStorage.setItem('counterMinValue', JSON.stringify(minValue))
    localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    localStorage.setItem('message', JSON.stringify(message))
    localStorage.setItem('errorMessage', JSON.stringify(error))
  }

  const setSettings = (min: number, max:number) => {
    setCount(min);
    setMinValue(min);
    setMaxValue(max);
  }

  return (
    <div className="App">
      <CounterSettings
          setSettings={setSettings}
          minValue={minValue}
          maxValue={maxValue}
          error={error}
          setError={setError}
          setMessage={setMessage}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
      />

      <Counter
          message={message}
          minValue={count}
          maxValue={maxValue}
          count={count}
          increment={increment}
          reset={reset}
          error={error}/>
    </div>
  );
}

export default App;
