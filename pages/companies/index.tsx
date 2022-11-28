import { CompaniesSectionHeader } from '@components/companies/CompaniesSectionHeader';
import { CompaniesTable } from '@components/companies/CompaniesTable';
import { PrivateLayout } from '@components/layouts/PrivateLayout';
import React from 'react';

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

Companies.auth = true;
