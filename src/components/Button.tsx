import React from 'react';

type ButtonType = {
    name: string,
    className?: string,
    callback: () => void,
    isDisabled?: boolean
}

const Button:React.FC<ButtonType> = ({name, className, callback, isDisabled}) => {
    const onClickHandler = () => {
        callback();
    }
    return <button className={className} onClick={onClickHandler} disabled={isDisabled}>{name}</button>
};

export default Button;