import { filesize } from 'filesize';
import { FC, useCallback, useState } from 'react';
import Button from '../../shared/components/Button/Button';
import { Dropzone } from '../../shared/components/Dropzone/Dropzone';
import { readJsonFile } from '../../shared/helpers/files';
import { snakizeData } from '../../shared/helpers/data';
import { useMutation, useQuery } from '@tanstack/react-query';
import { request } from '../../shared/client/baseClient';
import { customersClient } from '../../shared/client/customers/customersClient';
import { cacheKeys } from '../../config';

interface FileUploadProps {
  // TODO: Add prop types
}

const dropZoneMsgs = {
  dropZoneMsg: 'Drag and drop your json file in this area',
  dropZoneRejectedMsg: 'File must be .json',
  dropZoneAcceptedMsg: 'Drop your file',
};

const acceptedFileExtentions = {
  'application/json': ['.json'],
};

export interface IFileUpload {
  name: string;
  readableSize: number;
  file: File;
  type: string;
  isAccepted: boolean;
}

const FileUpload: FC<FileUploadProps> = () => {
  const [fileUploaded, setFileUploaded] = useState<IFileUpload>();

  const { mutateAsync: createCustomersMutation, data: createCustomersData } = useMutation(customersClient.createCustomers);



  console.log(createCustomersData)

  const dropHandler = useCallback(({ file, isAccepted }: { file: File; isAccepted: boolean }) => {
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

    const obj = await readJsonFile(fileUploaded?.file!)
  //@ts-ignore
    console.log(snakizeData(obj, ["_id"]))
      //@ts-ignore
    createCustomersMutation(snakizeData(obj, ["_id"]))
  };

  return (
    <div className="bg-white/30 max-w-screen-lg flex flex-col gap-7 shadow-lg w-full p-20 m-5 rounded-lg backdrop-filter backdrop-blur-lg border border-gray-300">
    <Dropzone
      onDrop={dropHandler}
      onFileReject={dropHandler}
      fileUploaded={fileUploaded}
      acceptedFileExtentions={acceptedFileExtentions}
      dropZoneMsgs={dropZoneMsgs}
    />
    {fileUploaded?.file && <Button className='self-end' onClick={saveFileHandler}>Save</Button>}
    </div>
  );
};

export default FileUpload;
