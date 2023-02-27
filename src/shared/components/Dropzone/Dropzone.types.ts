import { ReactNode } from 'react';

export interface IFileUpload {
  name: string;
  readableSize: number;
  file: File;
  type: string;
  isAccepted: boolean;
}
export enum DragVariant {
  Drag = 'drag',
  DragAccepted = 'dragAccepted',
  DragRejected = 'dragRejected',
  DragDropped = 'dragDropped',
}

export interface IOnDrop {
  file: File;
  isAccepted: boolean;
}

export interface ITypographyDropZoneMsgs {
  dropZoneMsg: string | JSX.Element;
  dropZoneRejectedMsg: string | JSX.Element;
  dropZoneAcceptedMsg: string | JSX.Element;
}

export interface IDropzoneMessageProps {
  variant: DragVariant;
  fileName?: string;
  readableSize?: number;
  dropZoneMsgs: ITypographyDropZoneMsgs;
}

export type DropzoneMessageVariants = Record<DragVariant, string | JSX.Element>;

export interface IDropzone {
  maxFiles?: number;
  onDrop: (dropArgs: IOnDrop) => void;
  onFileReject: (dropArgs: IOnDrop) => void;
  fileUploaded?: IFileUpload;
  acceptedFileExtentions: {};
  dropZoneMsgs: ITypographyDropZoneMsgs;
}

export interface IGetDragVariant {
  fileUploaded?: IFileUpload;
  isDragActive: boolean;
}

export interface DropzoneContainerProps {
  variant: DragVariant;
  children?: ReactNode;
}
