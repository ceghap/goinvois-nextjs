import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { SectionHeader } from '@components/SectionHeader';
import React from 'react';

const Customers = () => {
  return <SectionHeader title="Customers" />;
};

export default Customers;

Customers.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

Customers.auth = true;
