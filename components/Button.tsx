import React from 'react';

interface ButtonType {
  title: string;
  width: string;
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width: string;
  height?: string;
  backgroundColor: string;
  border?: string;
  padding?: string;
}

const Button = ({
  children,
  width,
  height,
  border,
  padding,
  backgroundColor,
  ...attributes
}: Props) => {
  return (
    <button
      type="button"
      // md:w-[210px]
      className={` rounded-[62px]  ${width} ${backgroundColor} ${border} ${height}  ${padding} flex items-center justify-center`}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default Button;
