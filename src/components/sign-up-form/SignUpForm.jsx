import React, { useState } from 'react';
import './SignUpForm.styles.scss';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFormAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFormAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={changeHandler}
          name='displayName'
          value={displayName}
        ></FormInput>

        <FormInput
          label='Email'
          type='email'
          required
          onChange={changeHandler}
          name='email'
          value={email}
        ></FormInput>
        <FormInput
          label='Password'
          type='password'
          required
          onChange={changeHandler}
          name='password'
          value={password}
        ></FormInput>
        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={changeHandler}
          name='confirmPassword'
          value={confirmPassword}
        ></FormInput>
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
