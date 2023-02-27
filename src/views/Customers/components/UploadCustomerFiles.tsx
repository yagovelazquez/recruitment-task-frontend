import { filesize } from 'filesize';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import GoBackButton from '../../../shared/components/Button/GoBackButton';
import Button from '../../../shared/components/Button/Button';
import { IFileUpload } from '../../../shared/components/Dropzone/Dropzone.types';
import { Dropzone } from '../../../shared/components/Dropzone/Dropzone';
import { customerFilesClient } from '../../../shared/client/customerFiles/customerFilesClient';
import { cacheKeys } from '../../../config';
import { getFormDataFromObject } from '../../../shared/helpers/files';

const dropZoneMsgs = {
  dropZoneMsg: 'Drag and drop your pdf file in this area',
  dropZoneRejectedMsg: 'File must be .pdf',
  dropZoneAcceptedMsg: 'Drop your file',
};

const acceptedFileExtentions = {
  'application/pdf': ['.pdf'],
};

const UploadCustomerFiles = () => {
  const [fileUploaded, setFileUploaded] = useState<IFileUpload>();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();
  useQuery([cacheKeys.customers.getCustomerFiles, id], () =>
    customerFilesClient.getFiles(id!)
  );

  const { mutateAsync: uploadFilesMutation } = useMutation(
    customerFilesClient.uploadFile,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([cacheKeys.customers.getCustomerFiles, id]);
      },
    }
  );

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

  useEffect(() => {
    if (!id) {
      navigate('/');
    }
  });

  const saveFileHandler = useCallback(async () => {
    const formData = getFormDataFromObject({
      file: fileUploaded?.file!,
      category: 'notes_to_customer',
    });
    await uploadFilesMutation({
      formData,
      id: id!,
    });
  }, [fileUploaded?.file, id, uploadFilesMutation]);

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

export default UploadCustomerFiles;
