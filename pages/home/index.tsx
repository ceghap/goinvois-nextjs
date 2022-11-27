import Head from 'next/head';
import { PrivateLayout } from '@components/layouts/PrivateLayout';
import React from 'react';
import { SectionHeader } from '@components/SectionHeader';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <div>
      <Head>
        <title>goinvois</title>
      </Head>

      <SectionHeader title="Home" />
    </div>
  );
}

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

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
