import { apiUrl } from '../../../config';
import { camelizeData } from '../../helpers/data';
import { request } from '../baseClient';
import {
  Customer,
  CustomerDetails,
  ICreateCustomerDetails,
} from './customersClient.types';

const createCustomers = async (customers: Customer[]): Promise<Customer[]> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customers),
  };

  const data = await request<Customer[]>(`${apiUrl}/customers/`, options);
  return camelizeData(data, ['_id']) as Customer[];
};

const createOrUpdateCustomerDetails = async (
  customerDetailsData: ICreateCustomerDetails
): Promise<CustomerDetails> => {
  const { id, customerDetails, isCustomerDetailsData } = customerDetailsData;

  const options = {
    method: isCustomerDetailsData ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerDetails),
  };

  const data = await request<CustomerDetails>(
    `${apiUrl}/customers/${id}/details/`,
    options
  );
  return camelizeData(data) as CustomerDetails;
};

const getCustomers = async (): Promise<Customer[]> => {
  const data = await request<Customer[]>(`${apiUrl}/customers/`);
  return camelizeData(data, ['_id']) as Customer[];
};

const getCustomerDetails = async (id: string): Promise<CustomerDetails> => {
  const data = await request<CustomerDetails>(
    `${apiUrl}/customers/${id}/details/`
  );
  return camelizeData(data, ['_id']) as CustomerDetails;
};

export const customersClient = {
  createCustomers,
  getCustomers,
  getCustomerDetails,
  createOrUpdateCustomerDetails,
};
