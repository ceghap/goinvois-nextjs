'use client';
import React from 'react';

interface Props {
  title: string;
  button?: React.ReactNode;
}

export const SectionHeader = ({ title, button }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold dark:text-gray-100 text-2xl mb-8">
        {title}
      </h1>
      {button}
    </div>
  );
};
