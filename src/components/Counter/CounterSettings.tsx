import React, {ChangeEvent, useState} from 'react';
import Button from "../Button";
import s from "./Counter.module.css"


type CounterSettingsType = {
    setSettings: (min: number, max: number) => void
    minValue: number
    maxValue: number
    setMinValue:(number:number) => void
    setMaxValue:(number:number) => void
    error: string
    setError: (error:string) => void
    setMessage: (message: string) => void
}

const CounterSettings: React.FC<CounterSettingsType> = ({
                                                            setSettings,
                                                            minValue,
                                                            maxValue, error,
                                                            setError, setMessage,
                                                            setMinValue,
                                                            setMaxValue
}) => {

    const setHandler = () => {
        setSettings(+minValue, +maxValue)
        setMessage('');
    };

    const inputMinHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        setMinValue(+inputValue)
        setMessage('Enter values and press set')
        if (+inputValue < 0 || +inputValue >= +maxValue) {
          setError('Incorrect value');
        } else {
            setError('');
        }
    }

    const inputMaxHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        setMaxValue(+inputValue)
        setMessage('Enter values and press set')
        if (+inputValue <= +minValue) {
          setError('Incorrect value');
        } else {
          setError('');
        }
    }

    const errorClassName = error ? s.errorInput : '';

    return (
        <div className={s.counter}>
            <label htmlFor="">
                <span className={s.span}>Min value</span>
                <input className={s.input + ' ' + errorClassName} type="number" value={minValue} onChange={inputMinHandler} placeholder='min value'/>
            </label>

            <label htmlFor="">
                <span className={s.span}>Max value</span>
                <input className={s.input + ' ' + errorClassName} type="number" value={maxValue} onChange={inputMaxHandler} placeholder='max value'/>
            </label>
            <Button className='button' name='Set' callback={setHandler} isDisabled={error ? true : false}/>
        </div>
    );
};

export default CounterSettings;