'use client';
import React from 'react';
import { useCompaniesStore } from './companiesStore';
import { SectionHeader } from '@components/SectionHeader';
interface Props {
  title: string;
}

export const CompaniesSectionHeader = ({ title }: Props) => {
  const toggle = useCompaniesStore((state) => state.toggle);
  return (
    <SectionHeader
      title={title}
      button={
        <button
          type="button"
          className="px-6 py-2 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900"
          onClick={toggle}
        >
          Add
        </button>
      }
    />
  );
};
