import { ContentArea } from '@components/ContentArea';
import { Sidebar } from '@components/Sidebar';
import { useSidebarStore } from '@components/Sidebar/SidebarStore';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const pages = [
  { path: 'home', name: 'Home' },
  { path: 'invoices', name: 'Invoices' },
  { path: 'companies', name: 'Companies' },
  { path: 'customers', name: 'Customers' },
  { path: 'profile', name: 'Profile' },
];

export const PrivateLayout = ({ children }: Props) => {
  const router = useRouter();
  const { setPage } = useSidebarStore((state) => state);

  useEffect(() => {
    const path = router.pathname.replace(/^\/|\/$/g, '');
    console.log(path);
    const page = pages.find((page) => page.path === path);

    if (page) {
      setPage(page.path, page.name);
    }
  }, [router.asPath]);
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <ContentArea>{children}</ContentArea>
    </div>
  );
};
