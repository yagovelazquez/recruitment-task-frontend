import { filesize } from 'filesize';
import { Fragment, useCallback, useState } from 'react';
import Button from '../../shared/components/Button/Button';
import { Dropzone } from '../../shared/components/Dropzone/Dropzone';
import { readJsonFile } from '../../shared/helpers/files';
import { snakizeData } from '../../shared/helpers/data';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { customersClient } from '../../shared/client/customers/customersClient';
import { useNavigate } from 'react-router-dom';
import GoBackButton from '../../shared/components/Button/GoBackButton';
import { IFileUpload } from './FileUpload.types';
import { cacheKeys } from '../../config';

const dropZoneMsgs = {
  dropZoneMsg: 'Drag and drop your json file in this area',
  dropZoneRejectedMsg: 'File must be .json',
  dropZoneAcceptedMsg: 'Drop your file',
};

const acceptedFileExtentions = {
  'application/json': ['.json'],
};

const FileUpload = () => {
  const [fileUploaded, setFileUploaded] = useState<IFileUpload>();
  const queryClient = useQueryClient();

  const { mutateAsync: createCustomersMutation } = useMutation(
    customersClient.createCustomers,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([cacheKeys.customers.getCustomers]);
      },
    }
  );
  const navigate = useNavigate();

  const dropHandler = useCallback(
    ({ file, isAccepted }: { file: File; isAccepted: boolean }) => {
      if (!file) return;

      setFileUploaded({
        name: file.name,
        readableSize: filesize(file.size) as number,
        file: file,
        type: file.type,
        isAccepted,
      });
    },
    []
  );

  const saveFileHandler = async () => {
    const obj = await readJsonFile(fileUploaded?.file!);
    //@ts-ignore
    createCustomersMutation(snakizeData(obj, ['_id']));
  };

  const goBackHandler = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Fragment>
      <Dropzone
        onDrop={dropHandler}
        onFileReject={dropHandler}
        fileUploaded={fileUploaded}
        acceptedFileExtentions={acceptedFileExtentions}
        dropZoneMsgs={dropZoneMsgs}
      />
      <div className="flex flex-row gap-4 justify-end">
        <GoBackButton onClick={goBackHandler} />
        {fileUploaded?.file && (
          <Button className="self-end" onClick={saveFileHandler}>
            Save
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default FileUpload;
