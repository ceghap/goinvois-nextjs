import { Navbar } from '@components/Navbar';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
