import { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.slice";

import FormInput from "../form-input/form-input.component";

import { SignupContainer, FormBtn } from "./sign-up-form.style";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  receiveEmails: false,
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword, receiveEmails } = formFields;
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormFields({
      ...formFields,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      return;
    }
    try {
      dispatch(signUpStart({ email, password, username: name, receiveEmails }));
      resetFormFields();
      navigate("/");
    } catch (error) {
      if (error) {
        console.error("Signup Error:", error);
        setErrors({ ...errors });
      } else {
        //Network error ot other issues
        console.error("Network Error:", error);
      }
    }
  };

  return (
    <SignupContainer>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Your Name"
          value={name}
          name="name"
          onChange={handleChange}
        />
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
          errorMessage={errors.password}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          errorMessage={errors.confirmPassword}
        />
        <div>
          <input
            type="checkbox"
            name="receiveEmails"
            checked={receiveEmails}
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
          <Link style={{ cursor: "pointer", color: "blue" }} to="/signin">
            Log in
          </Link>
        </p>
      </div>
    </SignupContainer>
  );
};

export default SignUpForm;
