import Head from 'next/head';
import { PrivateLayout } from '@components/layouts/PrivateLayout';
import React from 'react';
import { SectionHeader } from '@components/SectionHeader';

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

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
