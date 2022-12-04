import { CompaniesSectionHeader } from '@components/companies/CompaniesSectionHeader';
import { CompaniesTable } from '@components/companies/CompaniesTable';
import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { Company } from '@prisma/client';
import { GetServerSideProps } from 'next';
import React from 'react';

const Companies = ({ companies }: { companies: Company[] }) => {
  return (
    <>
      <CompaniesSectionHeader title="Companies" />
      {companies ? <CompaniesTable companies={companies} /> : <p>No Data</p>}
    </>
  );
};

export default Companies;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/api/companies', {
    method: 'GET',
    headers: {
      cookie: req.headers.cookie || '',
    },
  });
  const companies = await res.json();
  console.log(companies);
  return {
    props: {
      companies,
    },
  };
};

Companies.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

Companies.auth = true;
