import React from 'react';
import Button from "../Button";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {CounterStateType, incrementAC, resetAC} from "../../redux/counterReducer";
import {counterModeReducerType} from "../../redux/CounterModeReducer";


const Counter = () => {
    const {min, max, current} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const {isError, isMessage} = useSelector<AppStateType, counterModeReducerType>(state => state.counterMode)
    const dispatch = useDispatch();

    const increment = () => dispatch(incrementAC())
    const reset = () => dispatch(resetAC())

    const error = isError ? 'Incorrect value' : ''
    const message = isMessage ? 'Enter values and press set' : ''

    const countClassName = error ? s.error : message ? s.message : current === max ? s.countRed : '';
    return (
        <div className={s.counter}>
            <div className={s.count + ' ' + countClassName}>{error ? error : message ? message : current}</div>
            <Button className={'button'} name={'incr'} callback={increment} isDisabled={message ? true : current === max}/>
            <Button className={'button'} name={'res'} callback={reset} isDisabled={message ? true : current === 0}/>
        </div>
    );
};

export default Counter;