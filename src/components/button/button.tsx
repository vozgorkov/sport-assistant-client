import React from 'react';

interface ButtonProps {
  text: string;
  onClick(): void
}

const Button = ({ text, onClick }: ButtonProps) => {
  console.log(11)
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
