import Link from 'next/link';
import {
  TbFileInvoice,
  TbBuildingCommunity,
  TbHome,
  TbUsers,
} from 'react-icons/tb';

export const SidebarMenu = () => {
  return (
    <ul className="pt-2 pb-4 space-y-1 text-sm">
      <li className="dark:bg-gray-800 dark:text-gray-50 rounded-full">
        <Link
          rel="noopener noreferrer"
          href="/home"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbHome className="text-lg" />
          <span>home</span>
        </Link>
      </li>
      <li>
        <Link
          rel="noopener noreferrer"
          href="/home/invoices"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbFileInvoice className="text-lg" />
          <span>Invoices</span>
        </Link>
      </li>
      <li>
        <Link
          rel="noopener noreferrer"
          href="/home/companies"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbBuildingCommunity className="text-lg" />
          <span>Companies</span>
        </Link>
      </li>
      <li>
        <Link
          rel="noopener noreferrer"
          href="/home/customers"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbUsers className="text-lg" />
          <span>Customers</span>
        </Link>
      </li>
    </ul>
  );
};
