import { useState } from "react";

import {
  SectionSignup,
  FormHeading,
  FormBtnTop,
  FormWrapper,
  FormInputWrapper,
  FormBtn,
} from "./sign-up-form.style";

const SignUpInForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignUpIn = (mode: boolean) => setIsSignIn(mode);

  return (
    <SectionSignup>
      <div>
        <FormHeading>
          <span className="heading-span-1">{isSignIn ? "Sign" : "Sign"}</span>
          <span className="heading-span-2">{isSignIn ? "In" : "Up"}</span>
        </FormHeading>
        <FormBtnTop>
          <button
            className={`signin-btn ${isSignIn ? "active" : ""}`}
            onClick={() => toggleSignUpIn(true)}
          >
            SignIn
          </button>
          <button
            className={`signup-btn ${!isSignIn ? "active" : ""}`}
            onClick={() => toggleSignUpIn(false)}
          >
            SignUp
          </button>
        </FormBtnTop>
        <FormWrapper className={isSignIn ? "sign-in" : "sign-up"}>
          <FormInputWrapper className={isSignIn ? "hidden" : ""}>
            <input type="text" placeholder="Your Name" />
            <p className="message">Error Message</p>
          </FormInputWrapper>
          <FormInputWrapper>
            <input type="email" placeholder="Email Address" />
            <p className="message">Error Message</p>
          </FormInputWrapper>
          <FormInputWrapper>
            <input type="password" placeholder="Password" />
            <p className="message">Error Message</p>
          </FormInputWrapper>
          <FormInputWrapper className={isSignIn ? "hidden" : ""}>
            <input type="password" placeholder="Confirm Password" />
            <p className="message">Error Message</p>
          </FormInputWrapper>
          <FormBtn type="submit">Submit</FormBtn>
        </FormWrapper>
      </div>
    </SectionSignup>
  );
};

export default SignUpInForm;
