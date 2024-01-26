import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormValue } from '../../interface/interfaces';
import './style.css';

export const Form: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormValue>({
        mode: 'onSubmit'
    });

    const onSubmit: SubmitHandler<IFormValue> = (data) => console.log(data);

    const [isPassword, setIsPassword] = useState(false)
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const [isCheckbox, setIsCheckbox] = useState(false);

    const handlePassword = () => setIsPassword(!isPassword);
    const handleConfirmPassword = () => setIsConfirmPassword(!isConfirmPassword);
    const handleCheckbox = () => setIsCheckbox(!isCheckbox);

    return (
        <div className='container'>
            <div className='title'>
                <h4>Registration form</h4>
            </div>
            <form className='wrapper' onSubmit={handleSubmit(onSubmit)}>
                <div className='inputs' >
                    <div className='inputcontent'>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input
                            placeholder='First name'
                            {...register("firstName", { required: true, pattern: /^([A-Z][a-z\-']{2,17})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{2,17})$/ })} />
                        {errors.firstName && <p style={{ color: 'red' }}>Field is required</p>}
                    </div>
                    <div className='inputcontent'>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input
                            placeholder='Last name'
                            {...register("lastName", { required: true, pattern: /^([A-Z][a-z\-']{2,17})|([А-ЯЁIЇҐЄ][а-яёіїґє\-']{2,17})$/ })} />
                        {errors.lastName && <p style={{ color: 'red' }}>Field is required</p>}
                    </div>
                    <div className='inputcontent'>
                        <i className="fa fa-phone-square" style={{ fontSize: '24px' }}></i>
                        <input
                            type='tel'
                            placeholder='Phone'
                            {...register("phone", { required: true, pattern: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/ })} />
                        {errors.email && <p style={{ color: 'red' }}>Field is required</p>}
                    </div>
                    <div className='inputcontent'>
                        <i className="fa fa-envelope" style={{ fontSize: '24px' }}></i>
                        <input
                            placeholder='Email'
                            {...register("email", { required: true, pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/ })} />
                        {errors.email && <p style={{ color: 'red' }}>Field is required</p>}
                    </div>
                    <div className='inputcontent'>
                        <i className="fa fa-key" style={{ fontSize: '24px' }}></i>
                        <input
                            type={isPassword === false ? 'password' : 'text'}
                            placeholder='Password'
                            {...register("password", { required: true })} />
                        {isPassword === false ?
                            <i className="fa fa-eye-slash" onClick={handlePassword} style={{ fontSize: '24px' }}></i>
                            :
                            <i className="fa fa-eye" onClick={handlePassword} style={{ fontSize: '24px' }}></i>}
                        {errors.password && <p style={{ color: 'red' }}>Field is required</p>}
                    </div>
                    <div className='inputcontent'>
                        <i className="fa fa-key" style={{ fontSize: '24px' }}></i>
                        <input
                            type={isConfirmPassword === false ? 'password' : 'text'}
                            placeholder='Confirm password'
                            {...register("confirmPassword", { required: true })} />
                        {isConfirmPassword === false ?
                            <i className="fa fa-eye-slash" onClick={handleConfirmPassword} style={{ fontSize: '24px' }}></i>
                            :
                            <i className="fa fa-eye" onClick={handleConfirmPassword} style={{ fontSize: '24px' }}></i>}
                        {errors.confirmPassword && <p style={{ color: 'red' }}>Field is required</p>}
                    </div>
                    <div className='checkbox'>
                        {isCheckbox ?
                            <i onClick={handleCheckbox} className="fa fa-check-square-o" style={{ fontSize: '32px' }}></i>
                            :
                            <i onClick={handleCheckbox} className="fa fa-square-o" style={{ fontSize: '32px' }}></i>}
                    </div>
                    <div className='btn'>
                        <button>Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}