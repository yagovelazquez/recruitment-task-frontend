export interface IFileUpload {
    name: string;
    readableSize: number;
    file: File;
    type: string;
    isAccepted: boolean;
  }