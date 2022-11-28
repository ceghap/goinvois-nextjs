'use client';
import { Modal } from '@components/Modal';
import { SectionHeader } from '@components/SectionHeader';
import { useState } from 'react';
interface Props {
  title: string;
}

export const CompaniesSectionHeader = ({ title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SectionHeader
        title={title}
        button={
          <button
            type="button"
            className="px-6 py-2 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900 text-xs"
            onClick={() => setIsOpen(true)}
          >
            Add
          </button>
        }
      />
      <Modal
        header="Add company"
        body={
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3 text-sm ">
              <label htmlFor="firstname" className="dark:text-gray-400">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="col-span-full sm:col-span-3 text-sm">
              <label htmlFor="lastname" className="dark:text-gray-400">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="col-span-full text-sm">
              <label htmlFor="email" className="dark:text-gray-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="col-span-full text-sm">
              <label htmlFor="address" className="dark:text-gray-400">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
        }
        footer={
          <>
            <button
              type="button"
              className="mr-4 inline-flex justify-center rounded-full border border-transparent dark:bg-violet-400 px-4 py-2 text-sm font-medium dark:text-gray-900 hover:dark:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Submit
            </button>
          </>
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
