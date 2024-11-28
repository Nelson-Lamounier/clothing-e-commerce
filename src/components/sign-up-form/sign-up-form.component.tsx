import { useState } from "react";
import { Link } from "react-router-dom";

import {
  SignupContainer,
  FormBtn,

} from "./sign-up-form.style";
import FormInput from "../form-input/form-input.component";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing Up:", formData);
  };

  return (
    <SignupContainer>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Your Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
          errorMessage={errors.name}
        />
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
        <FormInput
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          errorMessage={errors.confirmPassword}
        />
        <div>
          <input
            type="checkbox"
            name="receiveEmails"
            checked={formData.receiveEmails}
            onChange={handleChange}
          />
          <label>
            Tick here to receive emails about our products, apps, sales,
            exclusive content, and more. View our Private Policy.
          </label>
        </div>
        <FormBtn type="submit">Sign Up</FormBtn>
      </form>

      <div>
        <p>
          Already have an account?{" "}
          <Link style={{ cursor: "pointer", color: "blue" }} to="/signin">Log in</Link>
        </p>
      </div>
    </SignupContainer>
  );
};

export default SignUpForm;
