import Link from 'next/link';
import {
  TbFileInvoice,
  TbBuildingCommunity,
  TbHome,
  TbUsers,
} from 'react-icons/tb';
import { useSidebarStore } from './SidebarStore';

export const SidebarMenu = () => {
  const { page } = useSidebarStore((state) => state);

  return (
    <ul className="pt-2 pb-4 space-y-1 text-sm">
      <li
        className={
          page === 'home'
            ? 'dark:bg-gray-800 dark:text-gray-50 rounded-full'
            : ''
        }
      >
        <Link
          rel="noopener noreferrer"
          href="/home"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbHome className="text-lg" />
          <span>home</span>
        </Link>
      </li>
      <li
        className={
          page === 'invoices'
            ? 'dark:bg-gray-800 dark:text-gray-50 rounded-full'
            : ''
        }
      >
        <Link
          rel="noopener noreferrer"
          href="/invoices"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbFileInvoice className="text-lg" />
          <span>Invoices</span>
        </Link>
      </li>
      <li
        className={
          page === 'companies'
            ? 'dark:bg-gray-800 dark:text-gray-50 rounded-full'
            : ''
        }
      >
        <Link
          rel="noopener noreferrer"
          href="/companies"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbBuildingCommunity className="text-lg" />
          <span>Companies</span>
        </Link>
      </li>
      <li
        className={
          page === 'customers'
            ? 'dark:bg-gray-800 dark:text-gray-50 rounded-full'
            : ''
        }
      >
        <Link
          rel="noopener noreferrer"
          href="/customers"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbUsers className="text-lg" />
          <span>Customers</span>
        </Link>
      </li>
    </ul>
  );
};
