import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import Button from './Button';
import { GoBackButtonProps } from './Button.types';

const GoBackButton: FC<GoBackButtonProps> = (props) => {
  return (
    <Button iconAfter={<ArrowUturnLeftIcon />} {...props}>
      Back
    </Button>
  );
};

export default GoBackButton;
