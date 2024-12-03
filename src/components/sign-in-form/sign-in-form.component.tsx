import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  GoogleLogin,
  googleLogout,
  CredentialResponse,
} from "@react-oauth/google";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.style";
import FormInput from "../form-input/form-input.component";

const SignInForm = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Signing In:", response.data);
      localStorage.setItem("token", response.data.token);
      navigation("/");
    } catch (error: any) {
      if (error.response) {
        // Server response with a ststus other than 2xx
        console.error("Sign-in Error:", error.response.data.message);
        setErrors({ ...errors, email: error.response.data.message });
      } else {
        // Network error or other issues
        console.error("Network Error:", error.message);
      }
    }
  };

  // Handle Google Sign-In Success
  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    try {
      if (credentialResponse.credential) {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/google/login`,
          {
            token: credentialResponse.credential,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Google Sign-In Success:", response.data);
        localStorage.setItem("token", response.data.token);
        navigation("/");
      } else {
        console.error("Google Sign-in Error: No credential returned");
      }
    } catch (error: any) {
      console.error("Google Sign-In Error:", error);
    }
  };

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
          value={formData.email}
          name="email"
          onChange={handleChange}
          errorMessage={errors.email}
        />
        <FormInput
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          errorMessage={errors.password}
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
