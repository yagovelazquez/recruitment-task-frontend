import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

export interface GoBackButtonProps extends ButtonProps {}
