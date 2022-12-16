import React, {ChangeEvent, useState} from 'react';
import Button from "../Button";
import s from "./Counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {setSettingsAC} from "../../redux/counterReducer";
import {setMaxValueAC, setMinValueAC, SettingsStateType} from "../../redux/settingsReducer";
import {setErrorAC, setMessageAC} from "../../redux/CounterModeReducer";

const CounterSettings = () => {

    const {min, max} = useSelector<AppStateType, SettingsStateType>(state => state.settings)
    const isError = useSelector<AppStateType, boolean>(state => state.counterMode.isError)

    const dispatch = useDispatch();

    const setHandler = () => {
        dispatch(setSettingsAC(min, max, min))
        dispatch(setMessageAC(false))
    };

    const inputMinHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        dispatch(setMinValueAC(+inputValue))
        dispatch(setMessageAC(true))
        if (+inputValue < 0 || +inputValue >= +max) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))
        }
    }

    const inputMaxHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        dispatch(setMaxValueAC(+inputValue))
        dispatch(setMessageAC(true))

        if (+inputValue <= min || max < 0 || (min < 0 && min < +inputValue)) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))
        }
    }

    const errorClassName = isError ? s.errorInput : '';

    return (
        <div className={s.counter}>
            <label htmlFor="">
                <span className={s.span}>Min value</span>
                <input className={s.input + ' ' + errorClassName} name='min' type="number" value={min} onChange={inputMinHandler} placeholder='min value'/>
            </label>

            <label htmlFor="">
                <span className={s.span}>Max value</span>
                <input className={s.input + ' ' + errorClassName} name='max' type="number" value={max} onChange={inputMaxHandler} placeholder='max value'/>
            </label>
            <Button className='button' name='Set' callback={setHandler} isDisabled={isError}/>
        </div>
    );
};

export default CounterSettings;