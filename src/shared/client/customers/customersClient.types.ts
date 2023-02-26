import { CamelToSnakeCase } from "../../types/types"

export interface Customer {
    firstName: string;
    guid: string;
    isActive: boolean;
    lastName: string;
    username: string;
    _id: string;
  }

export type CustomerApi = CamelToSnakeCase<Customer>