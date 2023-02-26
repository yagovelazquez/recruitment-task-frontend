import { FC } from 'react';
import ReactDropzone from 'react-dropzone';
import { getDragVariant } from './helpers';
import DropzoneMessage from './DropzoneMessage';
import { IDropzone } from './Dropzone.types';
import DropzoneContainer from './DropzoneContainer';


export const Dropzone: FC<IDropzone> = ({
  dropZoneMsgs,
  onDrop,
  onFileReject,
  fileUploaded,
  acceptedFileExtentions,
  maxFiles = 1,
}) => {

  return (
    <ReactDropzone
      onDrop={([acceptedFile]) => onDrop({ file: acceptedFile, isAccepted: true })}
      accept={acceptedFileExtentions}
      maxFiles={maxFiles}
      onDropRejected={([{ file }]) => onFileReject({ file: file, isAccepted: false })}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
      }) => {

        const dragVariant = getDragVariant({
          isDragActive,
          fileUploaded,
        });

        return (
          <DropzoneContainer {...getRootProps()} variant={dragVariant}>
            <input {...getInputProps()}/>
            <DropzoneMessage
              variant={dragVariant}
              dropZoneMsgs={dropZoneMsgs}
              fileName={fileUploaded?.name}
              readableSize={fileUploaded?.readableSize}
            />
          </DropzoneContainer>
        );
      }}
    </ReactDropzone>
  );
};
