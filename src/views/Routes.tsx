import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../shared/components/Layout.tsx/PageLayout/PageLayout';
import FileUpload from './FileUpload/FileUpload';
import CustomerDetails from './Customers/CustomerDetails';
import UploadCustomerFiles from './Customers/components/UploadCustomerFiles';
import Home from './Home/Home';
import UploadedFiles from './Customers/components/UploadedFiles';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: 'customers',
        element: <Home />,
      },
      {
        path: 'customers/:id',
        element: <CustomerDetails />,
      },
      {
        path: 'customers/:id/files-uploaded',
        element: <UploadedFiles />,
      },
      {
        path: 'customers/:id/file-upload',
        element: <UploadCustomerFiles />,
      },
      {
        path: 'file-upload',
        element: <FileUpload />,
      },
    ],
  },
]);
