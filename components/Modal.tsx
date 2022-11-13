import React from 'react';

interface Props {
  header: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  isOpen: boolean;
}

export const Modal = ({ header, body, footer, isOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
            {header}
          </h2>
          <p className="flex-1 dark:text-gray-400">{body}</p>
          <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
            {footer}
          </div>
        </div>
      )}
    </>
  );
};
