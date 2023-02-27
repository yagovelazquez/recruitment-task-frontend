import { apiUrl } from '../../../config';
import { request } from '../baseClient';
import { CustomerFiles, UploadFile } from './customerFilesClient.types';

const getFiles = async (id: string): Promise<CustomerFiles> => {
  return await request<CustomerFiles>(`${apiUrl}/customers/${id}/files/`);
};

const uploadFile = async ({
  id,
  formData,
}: UploadFile): Promise<CustomerFiles> => {
  const options = {
    method: 'POST',
    body: formData,
  };

  const data = await request<CustomerFiles>(
    `${apiUrl}/customers/${id}/files/`,
    options
  );

  return data;
};

export const customerFilesClient = {
  getFiles,
  uploadFile,
};
