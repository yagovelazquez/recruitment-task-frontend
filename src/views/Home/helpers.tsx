import { Input } from '../../shared/components/Form/Form.types';
import * as Yup from 'yup';
import { GetInitialValues, IGetInputList } from './Home.types';
import { FormikValues } from 'formik';
import Avatar from '../../shared/components/Avatar/Avatar';
import { urlRegex } from '../../shared/helpers/regex';

export const getInputList = (props: IGetInputList): Input[] => [
  {
    name: 'picture',
    label: 'Picture',
    inputContainerClass: 'col-span-2',
    componentBefore: <Avatar src={props.picture} />,
  },
  {
    name: 'username',
    label: 'Username',
    inputContainerClass: '',
  },
  {
    name: 'firstName',
    label: 'First Name',
    inputContainerClass: '',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    inputContainerClass: '',
  },
  {
    name: 'isActive',
    as: 'radio',
    label: 'Status',
    radioOptions: [
      { value: true, label: 'Active' },
      { value: false, label: 'Inactive' },
    ],
    inputContainerClass: '',
  },
  {
    name: 'age',
    label: 'Age',
    inputContainerClass: '',
  },
  {
    name: 'email',
    label: 'Email',
    inputContainerClass: '',
  },
  {
    name: 'phone',
    label: 'Phone',
    inputContainerClass: '',
  },
  {
    name: 'company',
    label: 'Company',
    inputContainerClass: '',
  },
  {
    name: 'address',
    label: 'Address',
    inputContainerClass: '',
  },
  {
    name: 'about',
    label: 'About',
    as: 'textarea',
    inputContainerClass: '',
  },
  {
    name: 'createdAt',
    label: 'Registered',
    type: 'date',
    inputContainerClass: '',
  },
  {
    name: 'latitude',
    label: 'Latitude',
    type: 'number',
    inputContainerClass: '',
  },
  {
    name: 'longitude',
    label: 'Longitude',
    type: 'number',
    inputContainerClass: '',
  },
  {
    name: 'balance',
    label: 'Balance',
    type: 'number',
    inputContainerClass: '',
  },
  {
    name: 'gender',
    as: 'radio',
    label: 'Gender',
    radioOptions: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    inputContainerClass: '',
  },
];

export const getYupSchema = () =>
  Yup.object().shape({
    balance: Yup.number().required('This field is required'),
    username: Yup.string().required('This field is required'),
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    isActive: Yup.boolean().required('This field is required'),
    picture: Yup.string()
      .matches(urlRegex, 'Enter a valid url')
      .required('This field is required'),
    age: Yup.number().integer().positive().required('This field is required'),
    email: Yup.string().email().required('This field is required'),
    phone: Yup.string()
      .matches(/^\+?\d{10,}$/)
      .required('This field is required'),
    company: Yup.string().required('This field is required'),
    address: Yup.string().required('This field is required'),
    about: Yup.string().required('This field is required'),
    createdAt: Yup.date().required('This field is required'),
    latitude: Yup.number().required('This field is required'),
    longitude: Yup.number().required('This field is required'),
    gender: Yup.string()
      .oneOf(['male', 'female'])
      .required('This field is required'),
  });

export const getInitialDefaultValues = () => ({
  username: '',
  firstName: '',
  lastName: '',
  isActive: '',
  picture: '',
  age: '',
  email: '',
  phone: '',
  company: '',
  address: '',
  about: '',
  createdAt: '',
  balance: '',
  latitude: '',
  longitude: '',
  gender: '',
});

export const getClasses = () => ({
  form: 'grid grid-cols-2 gap-2',
});

export const getInitialValues = ({
  databaseInitialValues,
  defaultInitialValues,
}: GetInitialValues): FormikValues => {
  const result: FormikValues = {};
  Object.keys(defaultInitialValues).forEach((key) => {
    for (let i = 0; i < databaseInitialValues.length; i++) {
      const value = databaseInitialValues[i][key];
      if (value !== undefined) {
        result[key as keyof typeof result] = value;
        break;
      } else {
        result[key] = defaultInitialValues[key];
      }
    }
  });

  return result;
};

export const customerDataKeys = [
  'firstName',
  'guid',
  'isActive',
  'lastName',
  'username',
];
export const customerDetailsDataKeys = [
  'balance',
  'picture',
  'age',
  'gender',
  'email',
  'phone',
  'company',
  'address',
  'about',
  'latitude',
  'longitude',
];
