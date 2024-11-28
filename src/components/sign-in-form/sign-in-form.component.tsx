import { useState } from "react";
import { Link } from "react-router-dom";

import {
  SignInContainer,
  ButtonsContainer,
} from "./sign-in-form.style";
import FormInput from "../form-input/form-input.component";

const SignInForm = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing In:", formData.email, formData.password);
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
          <button type="submit">Sign In With Google</button>
      </ButtonsContainer>
        </form>
          <p>
            Don’t have an account?{" "}
            <Link style={{ cursor: "pointer", color: "blue" }} to='/signup'>Sign up</Link>
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