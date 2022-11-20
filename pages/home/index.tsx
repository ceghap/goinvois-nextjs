import Head from 'next/head';
import { PrivateLayout } from '@components/layouts/PrivateLayout';
import React from 'react';
import { SectionHeader } from '@components/SectionHeader';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>goinvois</title>
      </Head>

      <SectionHeader title="Home" />
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

Home.auth = true;
