import React from 'react';
import { Button } from '../button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormValue } from '../../interface/interfaces';
import './style.css';


export const Form: React.FC = () => {

    const { register, handleSubmit } = useForm<IFormValue>();

    const onSubmit: SubmitHandler<IFormValue> = (data) => console.log(data);

    return (
        <div className='container'>
            <div className='title'>
                <h4>Registration form</h4>
            </div>
            <form className='wrapper' onSubmit={handleSubmit(onSubmit)}>
                <div className='inputs' >
                    <input
                        placeholder='First name'
                        {...register("firstName", { required: 'Error' })} />
                    <input
                        placeholder='Last name'
                        {...register("lastName")} />
                    <input
                        placeholder='Email'
                        type="email" {...register("email")} />
                    <input
                        placeholder='Phone number'
                        {...register("phone")} />
                    <input
                        placeholder='Password'
                        type='password'{...register("password")} />
                    <input
                        placeholder='Confirm password'
                        type="password" {...register("confirmPassword")} />
                    <input className='checkbox' type="checkbox" />
                    <Button onClick={() => onSubmit} label='Registration' />
                </div>
            </form>
        </div>
    )
}