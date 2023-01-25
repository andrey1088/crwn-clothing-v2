import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import Button from "../../components/button/button.component"
import './sign-in.styles.scss'

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="auth-page-wrapper">
      <h1>Sign In Page</h1>
        <SignInForm />
        <Button onClick={logGoogleUser} >Sign in with Google Popup</Button>
        <SignUpForm />
    </div>
  );
};

export default SignIn;
