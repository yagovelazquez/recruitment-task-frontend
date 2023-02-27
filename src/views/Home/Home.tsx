import { Fragment, FunctionComponent, useCallback } from 'react';
import Table from '../../shared/components/Table/Table';
import { Column, Row } from 'react-table';
import { useQuery } from '@tanstack/react-query';
import { cacheKeys } from '../../config';
import { customersClient } from '../../shared/client/customers/customersClient';
import LoadingSpinnerModal from '../../shared/components/Loading/LoadingSpinnerModal';
import { useNavigate } from 'react-router-dom';
import { Customer } from './Home.types';

interface IHomeProps {}

const columns: Column[] = [
  { Header: 'Id', accessor: '_id' },
  { Header: 'Guid', accessor: 'guid' },
  { Header: 'Username', accessor: 'username' },
  { Header: 'First Name', accessor: 'firstName' },
  { Header: 'Last Name', accessor: 'lastName' },
  {
    Header: 'Status',
    accessor: 'isActive',
    Cell: ({ value }) => <span>{value ? 'Active' : 'Inactive'}</span>,
  },
];

const Home: FunctionComponent<IHomeProps> = (props) => {
  const { data: customersData, isLoading: isLoadingCustomerData } = useQuery(
    [cacheKeys.customers.getCustomers],
    customersClient.getCustomers
  );

  const navigate = useNavigate();

  const rowClickHandler = useCallback(
    (row: Row<Customer>) => {
      navigate(`./${row.original._id}`, { state: row.original });
    },
    [navigate]
  );

  return (
    <Fragment>
      <LoadingSpinnerModal isLoading={isLoadingCustomerData} />
      {customersData && (
        <Table
          onRowClick={rowClickHandler}
          columns={columns}
          data={customersData}
        />
      )}
    </Fragment>
  );
};

export default Home;
