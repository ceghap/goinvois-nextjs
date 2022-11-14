import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { SectionHeader } from '@components/SectionHeader';
import React from 'react';

const Invoices = () => {
  return <SectionHeader title="Invoices" />;
};

export default Invoices;

Invoices.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
