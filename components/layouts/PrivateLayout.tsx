import { ContentArea } from '@components/ContentArea';
import { Sidebar } from '@components/Sidebar';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PrivateLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <ContentArea>{children}</ContentArea>
    </div>
  );
};
