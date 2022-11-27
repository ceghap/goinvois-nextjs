import { PrivateLayout } from '@components/layouts/PrivateLayout';
import { SectionHeader } from '@components/SectionHeader';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';

import React from 'react';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <>
      <SectionHeader title="Profile" />
      <div className="dark:text-gray-100 space-y-4 max-w-md">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-400">
            Photo
          </label>
          <Image
            src={session?.user?.image!}
            width="100"
            height="100"
            alt="photo"
          />
          <input
            type="file"
            name="photo"
            id="photo"
            value=""
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-400">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={session?.user?.name!}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={session?.user?.email!}
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <button
          type="button"
          className="px-6 py-2 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900 text-xs"
        >
          Save
        </button>
      </div>
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
    },
  };
};

export default Profile;

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

Profile.auth = true;
