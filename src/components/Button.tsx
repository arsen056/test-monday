import React from 'react';

type ButtonType = {
    name: string,
    className?: string,
    callback: () => void,
    isDisabled?: boolean
}

const Button:React.FC<ButtonType> = ({name, className, callback, isDisabled}) => {

    return <button className={className} onClick={callback} disabled={isDisabled}>{name}</button>
};

export default Button;