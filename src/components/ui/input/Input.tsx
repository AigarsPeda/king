import React from "react";

interface InputProps {
  value: string;
  type: string;
  name: string;
  autoComplete?: "on" | "off";
  placeholder?: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    value,
    type,
    name,
    autoComplete = "off",
    placeholder = " ",
    handleChange,
    label
  } = props;
  return (
    <div className="input">
      <input
        className="input-input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        autoComplete={autoComplete}
      />
      <label htmlFor={name} className="input-label">
        {label}
      </label>
    </div>
  );
};

export default Input;
