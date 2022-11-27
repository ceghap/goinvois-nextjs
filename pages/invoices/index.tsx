import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { SectionHeader } from '@components/SectionHeader';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';

interface Props {
  title: string;
}

const Invoices = ({ title }: Props) => {
  return (
    <>
      <SectionHeader title={title} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session)
    return { redirect: { destination: '/login', permanent: false } };

  return {
    props: {
      session,
      title: 'Invoices',
    },
  };
};

export default Invoices;

Invoices.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
