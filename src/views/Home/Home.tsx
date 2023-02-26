import { Fragment, FunctionComponent } from 'react';
import Table from '../../shared/components/Table/Table';
import { Column } from 'react-table';
import { useQuery } from '@tanstack/react-query';
import { cacheKeys } from '../../config';
import { customersClient } from '../../shared/client/customers/customersClient';
import LoadingSpinnerModal from '../../shared/components/Loading/LoadingSpinnerModal';

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



  return (
    <Fragment>
      <LoadingSpinnerModal isLoading={isLoadingCustomerData} />
      <div className="rounded-2xl shadow-lg p-3 max-w-4xl w-full">
        {customersData && <Table columns={columns} data={customersData} />}
      </div>
    </Fragment>
  );
};

export default Home;
