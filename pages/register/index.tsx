import { PublicLayout } from '@components/layouts/PublicLayout';
import { GetServerSideProps } from 'next';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div>
      <main className="flex justify-center items-center overflow-hidden bg-gray-800 pb-12">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
            data-bitwarden-watching="1"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-400">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-400">
                Confirm Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
              Register
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            have an account?{' '}
            <Link
              rel="noopener noreferrer"
              href="/login"
              className="underline dark:text-gray-100"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

// remove this if enable local credentials signup/login
export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: '/login', permanent: false } };
};

export default Register;

Register.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
