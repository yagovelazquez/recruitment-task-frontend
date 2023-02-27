export interface Customer {
  _id: number;
  guid: number;
  username: string;
  firstName: string;
  lastName: string;
  isActive: string;
}

export type GetInitialValues = {
  databaseInitialValues: { [key: string]: any }[];
  defaultInitialValues: { [key: string]: any };
};

export interface IGetInputList {
  picture: string;
}