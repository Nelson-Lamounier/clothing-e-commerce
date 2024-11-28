import React, { FC } from "react";
import { FormInputWrapper, Input, Message } from "./form-input.style";

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  isHidden?: boolean;
}

const FormInput: FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  errorMessage,
  isHidden = false,
}) => {
  return (
    <FormInputWrapper className={isHidden ? "hidden" : ""}>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {errorMessage && <Message className="message">{errorMessage}</Message>}
    </FormInputWrapper>
  );
};

export default FormInput;