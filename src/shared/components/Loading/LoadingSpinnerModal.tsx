import Modal from '../Modal/Modal';
import LoadingSpinner from './LoadingSpinner';
import { FC } from 'react';
import { ModalClassVariantEnum } from '../Modal/Modal.types';
import { LoadingSpinnerModalProps } from './loading.types';

const LoadingSpinnerModal: FC<LoadingSpinnerModalProps> = ({ isLoading }) => {
  return (
    <Modal isModal={isLoading} classVariant={ModalClassVariantEnum.middleCentered}>
      <div className="z-50">
              <LoadingSpinner />
              </div>

    </Modal>
  );
};

export default LoadingSpinnerModal;
