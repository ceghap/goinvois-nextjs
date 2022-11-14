import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { SectionHeader } from '@components/SectionHeader';
import React from 'react';

const Profile = () => {
  return <SectionHeader title="Customers" />;
};

export default Profile;

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
