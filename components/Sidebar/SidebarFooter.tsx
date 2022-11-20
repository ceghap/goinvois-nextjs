import { TbLogout, TbSettings } from 'react-icons/tb';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useSidebarStore } from './SidebarStore';

export const SidebarFooter = () => {
  const { page } = useSidebarStore((state) => state);

  return (
    <ul className="pt-4 pb-2 space-y-1 text-xs">
      <li
        className={
          page === 'profile'
            ? 'dark:bg-gray-800 dark:text-gray-50 rounded-full'
            : ''
        }
      >
        <Link
          rel="noopener noreferrer"
          href="/profile"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbSettings className="text-sm" />
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center p-4 space-x-3 rounded-md"
          onClick={() => signOut()}
        >
          <TbLogout className="text-sm" />
          <span>Logout</span>
        </a>
      </li>
    </ul>
  );
};
