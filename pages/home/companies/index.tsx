import { CompaniesSectionHeader } from './CompaniesSectionHeader';
import { CompaniesTable } from './CompaniesTable';
import React from 'react';
import { PrivateLayout } from '@components/layouts/PrivateLayout';

const Companies = () => {
  return (
    <>
      <CompaniesSectionHeader title="Companies" />
      <CompaniesTable />
    </>
  );
};

export default Companies;

Companies.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
