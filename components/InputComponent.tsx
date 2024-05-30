import React, { ChangeEvent } from 'react';
import SearchIcon from './icons/SearchIcon';

// type Icon = React.ComponentType<React.ComponentProps<'svg'>>;
// type Icon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'email' | 'password';
  label?: string;
  value?: string | number;
  name?: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  width: string;
  backgroundColor: string;
  //   icon?: Icon;
  icon?: React.ReactElement;
  styles?: string;
  iconStyles?: string;
}

const InputComponent = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  icon,
  styles,
  iconStyles,
}: InputProps) => {
  // h-12 2xl:h-16 lg:w-[35vw] 2xl:w-[40vw]
  return (
    <div className={`${styles} relative flex rounded-full`}>
      {/* <input
        id="search"
        type="text"
        placeholder="Search for products..."
        className="font-satoshi text-base 2xl:text-lg font-normal w-full bg-[#F0F0F0] pl-[3.25rem] rounded-full pt-3 2xl:pt-4 pb-[0.875rem] 2xl:pb-4 "
      /> */}
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="font-satoshi text-sm lg:text-base 2xl:text-lg font-normal w-full bg-[#F0F0F0] pl-[3.25rem] rounded-full pt-3 2xl:pt-4 pb-[0.875rem] 2xl:pb-4 "
      />
      <div
        className={`absolute  left-0 pl-4 2xl:pl-5 py-3 2xl:py-5 flex items-center ${iconStyles}`}
      >
        {/* <SearchIcon opacity={0.4} /> */}
        {icon && <>{icon}</>}
      </div>
      {/* {error && <p className="error">Input filed can't be empty!</p>} */}
    </div>
  );
};

export default InputComponent;
