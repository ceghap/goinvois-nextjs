import Link from 'next/link';
import { TbChevronsRight, TbHome } from 'react-icons/tb';
import { useSidebarStore } from './Sidebar/SidebarStore';

export const Breadcrumb = () => {
  const { name } = useSidebarStore((state) => state);
  return (
    <nav
      aria-label="breadcrumb"
      className="w-full px-4 py-2 dark:bg-gray-900 dark:text-gray-100 text-xs"
    >
      <ol className="flex h-8 space-x-2 dark:text-gray-400">
        <li className="flex items-center">
          <Link
            rel="noopener noreferrer"
            href="/home"
            className="hover:underline"
          >
            <TbHome />
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <TbChevronsRight />
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-1 capitalize hover:underline"
          >
            {name}
          </a>
        </li>
      </ol>
    </nav>
  );
};
