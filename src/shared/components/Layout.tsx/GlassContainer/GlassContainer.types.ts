import { HTMLAttributes } from 'react';

export interface GlassContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}