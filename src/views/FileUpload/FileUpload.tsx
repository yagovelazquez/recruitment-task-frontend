import { filesize } from 'filesize';
import { FC, useCallback, useState } from 'react';
import Button from '../../shared/components/Button/Button';
import { Dropzone } from '../../shared/components/Dropzone/Dropzone';

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jsonData, setJsonData] = useState<unknown | null>(null);

  const [fileUploaded, setFileUploaded] = useState<IFileUpload>();

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

  const saveFileHandler = () => {
    console.log(fileUploaded)
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
    <Button className='self-end' onClick={saveFileHandler}>Save</Button>
    </div>
  );
};

export default FileUpload;
