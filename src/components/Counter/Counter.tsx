import React from 'react';
import Button from "../Button";
import s from "./Counter.module.css"

type CounterType = {
    count: number
    message: string
    increment: () => void
    reset: () => void
    minValue:number
    maxValue: number
    error: string
}

const Counter:React.FC<CounterType> = ({count, message, increment, reset, minValue, maxValue, error}) => {

    const countClassName = error ? s.error : message ? s.message : count === maxValue ? s.countRed : '';
    return (
        <div className={s.counter}>
            <div className={s.count + ' ' + countClassName}>{error ? error : message ? message : count}</div>
            <Button className={'button'} name={'incr'} callback={increment} isDisabled={message ? true : count === maxValue}/>
            <Button className={'button'} name={'res'} callback={reset} isDisabled={message ? true : count === 0}/>
        </div>
    );
};

export default Counter;