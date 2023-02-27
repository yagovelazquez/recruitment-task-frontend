import { FC, forwardRef, Ref } from 'react';
import { DropzoneContainerProps } from './Dropzone.types';
import { getDropzoneContainerClassName } from './helpers';

const DropzoneContainer: FC<DropzoneContainerProps> = forwardRef(
  ({ variant, children, ...rest }, ref: Ref<HTMLDivElement>) => {
    const className = getDropzoneContainerClassName(variant);

    return (
      <div className={className} {...rest} ref={ref}>
        {children}
      </div>
    );
  }
);

export default DropzoneContainer;
