import { ReactNode } from 'react';

export enum ModalClassVariantEnum {
  middleCentered = 'middleCentered',
}

export type ModalProps = {
  isModal: boolean;
  classVariant: ModalClassVariantEnum;
  children: ReactNode;
};