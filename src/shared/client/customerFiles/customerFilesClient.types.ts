export interface CustomerFile {
  id: number;
  file: string;
  category: string;
  customer: string;
}
export type CustomerFiles = CustomerFile[];

export interface UploadFile {
  id: string;
  formData: FormData;
}
