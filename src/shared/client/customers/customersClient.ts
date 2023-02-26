import { apiUrl } from "../../../config";
import { camelizeData } from "../../helpers/data";
import { request } from "../baseClient";
import { Customer } from "./customersClient.types";



const createCustomers = async (customers: Customer[]): Promise<Customer[]> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customers),
  };

  const data = await request<Customer[]>(`${apiUrl}/customers/`, options);
  return camelizeData(data, ["_id"]) as Customer[]
};

const getCustomers = async (): Promise<Customer[]> => {
    const data = await request<Customer[]>(`${apiUrl}/customers/`);
    console.log(data)
    console.log('AFTER')
    console.log(camelizeData(data, ["_id"]))
    return camelizeData(data, ["_id"]) as Customer[]
};

export const customersClient = {
    createCustomers, 
    getCustomers  
};