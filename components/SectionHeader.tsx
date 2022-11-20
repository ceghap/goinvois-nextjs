'use client';
import React from 'react';

interface Props {
  title: string;
  button?: React.ReactNode;
}

export const SectionHeader = ({ title, button }: Props) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="font-semibold dark:text-gray-100 text-xl">{title}</h1>
      {button}
    </div>
  );
};
