import { FC } from 'react';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  iconBefore,
  iconAfter,
  ...rest
}) => {
  const defaultStyles =
    'bg-white/20 flex flex-row gap-2 text-white tracking-widest focus:outline-none uppercase rounded shadow-lg py-3 px-7 text-gray-700 hover:bg-white/30 transition-all duration-200';

  return (
    <button className={`${defaultStyles} ${className}`} {...rest}>
      {iconBefore && (
        <span className="w-[1.5rem] h-[1.5rem]">{iconBefore}</span>
      )}
      <span>{children}</span>
      {iconAfter && <span className="w-[1.5rem] h-[1.5rem]">{iconAfter}</span>}
    </button>
  );
};

export default Button;
