import React from 'react';
import { InputFields } from '../inputs/InputFields';
import './style.css';
import { Button } from '../button/Button';

export const Form: React.FC = () => {

    const handlerButton = () => {
        console.log('Button');
    }
    
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='title'>
                    <h3>Registration</h3>
                </div>
                <div className='inputs'>
                    <h5>First name</h5>
                    <InputFields type='text' />
                    <h5>Last name</h5>
                    <InputFields type='text' />
                    <h5>E-mail</h5>
                    <InputFields type='mail' />
                    <h5>Password</h5>
                    <InputFields type='password' />
                    <h5>Repeat password</h5>
                    <InputFields type='password' />
                </div>
                <div className='checkbox'>
                    <input type="checkbox" />
                </div>
                <div>
                    <Button label='Registration' onClick={handlerButton} />
                </div>
            </div>
        </div>
    )
}