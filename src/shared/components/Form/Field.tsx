import { FC } from 'react';
import {
  ErrorMessage,
  Field as FormikField,
} from 'formik';
import { Input } from './Form.types';

export const Field: FC<Input> = ({
  name,
  inputContainerClass,
  type = 'text',
  radioOptions,
  as = 'text',
  componentBefore,
  ...rest
}) => {
  return (
    <div className={`flex flex-row items-center gap-5 ${inputContainerClass}`}>
      {componentBefore}
      <div className={`flex flex-col`}>
        <label htmlFor={name}>{rest.label}</label>
        {as === 'radio' && (
          <div role="group">
            {radioOptions &&
              radioOptions.map((option) => (
                <label key={option.label}>
                  <FormikField
                    className="mx-4"
                    type="radio"
                    name={name}
                    value={option.value}
                  />
                  {option.label}
                </label>
              ))}
          </div>
        )}
        {as === 'textarea' && (
          <FormikField
            as="textarea"
            name={name}
            className="text-black px-2 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-violet-500"
            {...rest}
          />
        )}
        {as === 'text' && (
          <FormikField
            type={type}
            name={name}
            className="text-black px-2 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-500 focus-visible:border-violet-500"
            {...rest}
          />
        )}
        <p className="text-rose-400 text-xs italic my-1 min-h-[1rem]">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};
