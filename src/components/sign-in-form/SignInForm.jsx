import React, { useState } from 'react';
import './SignInForm.styles.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFormAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={changeHandler}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={changeHandler}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' onClick={signInWithGoogle} type='button'>
            Google SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
