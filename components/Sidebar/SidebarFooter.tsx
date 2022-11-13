import { TbLogout, TbSettings } from 'react-icons/tb';
import Link from 'next/link';

export const SidebarFooter = () => {
  return (
    <ul className="pt-4 pb-2 space-y-1 text-sm">
      <li>
        <Link
          rel="noopener noreferrer"
          href="/dashboard/profile"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbSettings className="text-lg" />
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <Link
          rel="noopener noreferrer"
          href="/"
          className="flex items-center p-4 space-x-3 rounded-md"
        >
          <TbLogout className="text-lg" />
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
};
