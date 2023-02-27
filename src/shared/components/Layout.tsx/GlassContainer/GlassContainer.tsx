import { FC } from 'react';
import { GlassContainerProps } from './GlassContainer.types';

const GlassContainer: FC<GlassContainerProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={`bg-white/30 flex flex-col gap-7 shadow-lg w-full p-20 rounded-lg backdrop-filter backdrop-blur-lg ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
