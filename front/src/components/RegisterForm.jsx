import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API } from '../services/api';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post('users/register', formData).then((res) => {});
    navigate('/logs');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        {...register('email', { required: true })}
      />
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        id='password'
        {...register('password', { required: true })}
      />
      <label htmlFor="emoji">Emoji:</label>
      <select
        name="emoji"
        id="emoji"
        {...register("emoji", { required: true })}
      >
        <option value="💀">💀</option>
        <option value="🌙">🌙</option>
        <option value="🐖">🐖</option>
        <option value="🥜">🥜</option>
      </select>
      <button type='submit'>Register</button>
    </form>
  );
};

export default RegisterForm;
