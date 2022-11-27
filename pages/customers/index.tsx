import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { SectionHeader } from '@components/SectionHeader';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';

const Customers = () => {
  return <SectionHeader title="Customers" />;
};

export default Customers;

Customers.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session)
    return { redirect: { destination: '/login', permanent: false } };

  return {
    props: {
      session,
    },
  };
};
