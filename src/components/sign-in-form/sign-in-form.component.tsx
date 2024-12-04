import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import axios from "axios";
import {
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.style";
import FormInput from "../form-input/form-input.component";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.slice";


const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart({email, password}))
      resetFormFields();
      navigation('/')
    } catch (error) {
      console.log('User seign in failed', error)
    } }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormFields({ ...formFields, [name]: value });
    };

  const handleGoogleSuccess = (credentialResponse: any) => {
    try {
      const token = credentialResponse.credential;
      dispatch(googleSignInStart(token))
      navigation('/')
    } catch (error) {
      console.error("Failed to SignIn with google", error)
    }
  }

  // Handle Google Sign-In Failure
  const handleGoogleFailure = () => {
    console.error("Google Sign-In Error");
  };

  return (
    <SignInContainer>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit} className="sign-in">
        <FormInput
          type="email"
          placeholder="Email Address"
          value={email}
          name="email"
          onChange={handleChange}
          
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleChange}
          
        />
        <ButtonsContainer>
          <button type="submit">Sign In</button>
          {/* <button type="submit">Sign In With Google</button> */}
          {/* Google Sign-In Button */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </ButtonsContainer>
      </form>
      <p>
        Don’t have an account?{" "}
        <Link style={{ cursor: "pointer", color: "blue" }} to="/signup">
          Sign up
        </Link>
      </p>
      <p>
        <span style={{ cursor: "pointer", color: "blue" }}>
          Forgot password?
        </span>
      </p>
    </SignInContainer>
  );
};


export default SignInForm;
