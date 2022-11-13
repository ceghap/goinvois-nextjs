'use client';
import React from 'react';
import { useCompaniesStore } from './companiesStore';
interface Props {
  title: string;
}

export const CompaniesSectionHeader = ({ title }: Props) => {
  const toggle = useCompaniesStore((state) => state.toggle);
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold dark:text-gray-100">{title}</h1>
      <button
        type="button"
        className="px-6 py-2 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900"
        onClick={toggle}
      >
        Add
      </button>
    </div>
  );
};
