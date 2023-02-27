import { FC, useCallback } from 'react';
import Button from '../../../shared/components/Button/Button';
import { FormButtonProps } from '../../../shared/components/Form/Form.types';
import GoBackButton from '../../../shared/components/Button/GoBackButton';
import { useNavigate } from 'react-router-dom';
import { ArrowUpOnSquareIcon, FolderIcon } from '@heroicons/react/24/solid';

const SubmitButtonCostDetForm: FC<FormButtonProps> = () => {
  const navigate = useNavigate();
  const navigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const navigateToUploadFiles = useCallback(() => {
    navigate('./file-upload');
  }, [navigate]);

  const navigateToUploadedFiles = useCallback(() => {
    navigate('./files-uploaded');
  }, [navigate]);

  return (
    <div className={`flex justify-end gap-4`}>
      <Button
        onClick={navigateToUploadedFiles}
        iconAfter={
          <FolderIcon className="fill-transparent stroke-white text-white bg-pink" />
        }
      >
        Upload files
      </Button>
      <Button
        onClick={navigateToUploadFiles}
        iconAfter={
          <ArrowUpOnSquareIcon className="fill-transparent stroke-white text-white bg-pink" />
        }
      >
        Upload files
      </Button>
      <GoBackButton onClick={navigateBack} />
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default SubmitButtonCostDetForm;
