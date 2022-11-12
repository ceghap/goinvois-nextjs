import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { TbFileInvoice } from 'react-icons/tb';

export const SidebarMenu = () => {
  return (
    <ul className="pt-2 pb-4 space-y-1 text-sm">
      <li className="dark:bg-gray-800 dark:text-gray-50 rounded-full">
        <Link
          rel="noopener noreferrer"
          href="/"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <GoHome className="text-lg" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          rel="noopener noreferrer"
          href="/invoices"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbFileInvoice className="text-lg" />
          <span>Invoices</span>
        </Link>
      </li>
    </ul>
  );
};
