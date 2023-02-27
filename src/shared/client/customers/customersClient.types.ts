import { CamelToSnakeCase, ObjectWithKeys } from '../../types/types';

export interface Customer {
  firstName: string;
  guid: string;
  isActive: boolean;
  lastName: string;
  username: string;
  _id: string;
}

export interface CustomerDetails {
  balance: string;
  picture: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  about: string;
  latitude: number;
  longitude: number;
}

export type CustomerApi = CamelToSnakeCase<Customer>;

export interface ICreateCustomerDetails {
  id: string;
  customerDetails: ObjectWithKeys;
  isCustomerDetailsData: boolean;
}
