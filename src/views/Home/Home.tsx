import { FunctionComponent } from 'react';
import Table from '../../shared/components/Table/Table';
import customersData from '../../customers.json';
import { Column } from 'react-table';

interface IHomeProps {}

const Home: FunctionComponent<IHomeProps> = (props) => {
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

  return (
      <div className="rounded-2xl shadow-lg p-3 max-w-4xl w-full">
        <Table columns={columns} data={customersData} />
      </div>
  );
};

export default Home;
