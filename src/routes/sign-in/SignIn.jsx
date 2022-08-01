import SignUpForm from '../../components/sign-up-form/SignUpForm';
import {
  createUserDocumentFormAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFormAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
