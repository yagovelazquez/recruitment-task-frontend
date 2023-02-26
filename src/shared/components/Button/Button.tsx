import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className = '', ...rest }) => {
  const defaultStyles = 'bg-white/20 text-white tracking-widest uppercase rounded shadow-lg py-3 px-7 text-gray-700 hover:bg-white/30 transition-all duration-200';

  return (
    <button className={`${defaultStyles} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
