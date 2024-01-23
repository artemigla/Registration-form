import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormValue } from '../../interface/interfaces';
import './style.css';

export const Form: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormValue>({
        mode: 'onChange'
    });

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
                        {...register("firstName", { required: true, pattern: /^([A-Z][a-z\-']{2,17})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{2,17})$/ })} />
                    {errors.firstName && <p style={{ color: 'red', marginLeft: '-65%' }}>Field is required</p>}
                    <input
                        placeholder='Last name'
                        {...register("lastName", { required: true, pattern: /^([A-Z][a-z\-']{2,17})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{2,17})$/ })} />
                    {errors.lastName && <p style={{ color: 'red', marginLeft: '-65%' }}>Field is required</p>}
                    <input
                        type='tel'
                        placeholder='Phone'
                        {...register("phone", { required: true, pattern: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/ })} />
                    {errors.email && <p style={{ color: 'red', marginLeft: '-65%' }}>Field is required</p>}
                    <input
                        placeholder='Email'
                        {...register("email", { required: true, pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/ })} />
                    {errors.email && <p style={{ color: 'red', marginLeft: '-65%' }}>Field is required</p>}
                    <input
                        type='password'
                        placeholder='Password'
                        {...register("password", { required: true })} />
                    {errors.password && <p style={{ color: 'red', marginLeft: '-65%' }}>Field is required</p>}
                    <input
                        type='password'
                        placeholder='Confirm password'
                        {...register("confirmPassword", { required: true })} />
                    {errors.confirmPassword && <p style={{ color: 'red', marginLeft: '-65%' }}>Field is required</p>}
                    <input type="checkbox" style={{ marginLeft: '-95%' }} />
                    <input type='submit' />
                </div>
            </form>
        </div>
    )
}