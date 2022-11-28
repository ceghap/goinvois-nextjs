import { CompaniesSectionHeader } from '@components/companies/CompaniesSectionHeader';
import { CompaniesTable } from '@components/companies/CompaniesTable';
import React from 'react';
import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

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
