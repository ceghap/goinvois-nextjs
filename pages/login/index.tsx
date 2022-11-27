import { DefaultLogin } from '@components/auth/DefaultLogin';
import { OauthOnly } from '@components/auth/OauthOnly';
import { PublicLayout } from '@components/layouts/PublicLayout';
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div>
      <main className="flex justify-center items-center overflow-hidden bg-gray-800 pb-12 h-screen">
        <OauthOnly />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) return { redirect: { destination: '/home', permanent: false } };

  return {
    props: {
      session,
    },
  };
};

export default Login;

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
