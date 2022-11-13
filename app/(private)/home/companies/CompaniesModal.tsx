'use client';
import React from 'react';
import { useCompaniesStore } from './companiesStore';
import { Modal } from '@components/Modal';

interface Props {
  header: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export const CompaniesModal = ({ header, body, footer }: Props) => {
  const isModalOpen = useCompaniesStore((state) => state.isModalOpen);

  return (
    <Modal header={header} body={body} footer={footer} isOpen={isModalOpen} />
  );
};