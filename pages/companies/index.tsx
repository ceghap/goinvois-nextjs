import { CompaniesSectionHeader } from '@components/companies/CompaniesSectionHeader';
import { CompaniesTable } from '@components/companies/CompaniesTable';
import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { Company } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import React from 'react';

const fetchCompanies = (cookie: string = ''): Promise<Company[]> =>
  fetch('http://localhost:3000/api/companies', {
    method: 'GET',
    headers: {
      cookie,
    },
  }).then((response) => response.json());

const Companies = ({
  initialCompanies,
  cookie,
}: {
  initialCompanies: Company[];
  cookie: string;
}) => {
  const { data: companies } = useQuery({
    queryKey: ['companies'],
    queryFn: () => fetchCompanies(cookie),
    initialData: initialCompanies,
  });

  return (
    <>
      <CompaniesSectionHeader title="Companies" />
      {companies ? <CompaniesTable companies={companies} /> : <p>No Data</p>}
    </>
  );
};

export default Companies;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const companies = await fetchCompanies(req.headers.cookie || '');

  return {
    props: {
      initialCompanies: companies,
      cookie: req.headers.cookie || '',
    },
  };
};

Companies.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

Companies.auth = true;
