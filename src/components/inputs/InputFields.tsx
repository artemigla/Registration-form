import React from 'react';
import { IInputs } from '../../interface/interfaces';
import './style.css';

export const InputFields: React.FC<IInputs> = ({ type, value, onInput }) => {
    return (
        <input
            type={type}
            value={value}
            onInput={onInput}
            className='inputs'
        />
    )
}