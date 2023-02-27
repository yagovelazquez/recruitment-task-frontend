import { FieldProps, FormikValues } from 'formik';
import { ComponentType, InputHTMLAttributes, ReactNode } from 'react';
import * as yup from 'yup';
import { ButtonProps } from '../Button/Button.types';

export interface Input extends InputHTMLAttributes<HTMLInputElement> {
  inputContainerClass: string;
  name: string;
  label: string;
  as?: string | ComponentType<FieldProps['field']>;
  radioOptions?: { label: string; value: string | boolean }[];
  componentBefore?: ReactNode;
}

export type FormPropsClasses = {
  formContainer?: string;
  formTitle?: string;
  form?: string;
  buttonContainer?: string;
  button?: string;
};

export type FormProps = {
  inputList: Input[];
  validationSchema: yup.ObjectSchema<any>;
  initialValues: FormikValues;
  title: string;
  onSubmit: (values: FormikValues) => void;
  buttonProps?: ButtonProps;
  classes?: FormPropsClasses;
  submitComponent?: ReactNode;
};

export type FormButtonProps = Pick<
  FormProps,
  'classes' | 'buttonProps' | 'submitComponent'
>;
