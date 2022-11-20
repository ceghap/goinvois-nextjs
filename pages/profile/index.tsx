import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { SectionHeader } from '@components/SectionHeader';
import { useSession } from 'next-auth/react';

import React from 'react';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <>
      <SectionHeader title="Profile" />
      <div>
        <div className="col-span-full sm:col-span-3">
          <img src={session?.user?.image} />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={session?.user?.name}
            placeholder="First name"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="firstname" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="text"
            value={session?.user?.email}
            placeholder="First name"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
          />
        </div>
      </div>
    </>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

Profile.auth = true;
