'use client';
import React from 'react';

interface Props {
  header: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const Modal = ({ header, body, footer, isOpen, setIsOpen }: Props) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-gray-800 dark:text-gray-100 bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                >
                  {header}
                </Dialog.Title>
                <div className="mt-2">{body}</div>

                <div className="mt-4 flex justify-end">
                  {footer}
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-w-100 px-4 py-2 text-sm font-medium dark:text-gray-900 dark:bg-gray-100 bg-gray-200 dark:border-gray-300 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
