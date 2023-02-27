import { FC, Fragment } from 'react';
import Button from '../Button/Button';
import { FormButtonProps } from './Form.types';

const FormButton: FC<FormButtonProps> = ({
  classes,
  buttonProps,
  submitComponent,
}) => {
  return (
    <Fragment>
      {submitComponent ? (
        submitComponent
      ) : (
        <div className={`${classes?.buttonContainer} flex justify-end`}>
          <Button className={classes?.button} type="submit" {...buttonProps}>
            Submit
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default FormButton;
