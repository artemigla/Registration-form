import React from 'react';
import { IButton } from '../../interface/interfaces';
import './style.css';

export const Button: React.FC<IButton> = ({label, onClick}) => {
    return (
        <div className='btnwrapper'>
            <button className='btn' onClick={onClick}>{label}</button>
        </div>
    )
}