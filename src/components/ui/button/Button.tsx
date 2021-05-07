import React from "react";

interface IButton {
  isLoading: boolean;
  type?: "button" | "submit" | "reset";
  title: string;
}

const Button: React.FC<IButton> = (props) => {
  const { isLoading, type, title } = props;
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`button ${isLoading && "loading"}`}
    >
      {!isLoading && `${title}`}
    </button>
  );
};

export default Button;
