import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className=" bg-gray-100 text-gray-900">
      <h1 className="text-[20vw] text-center font-medium uppercase leading-none">
        <Link href="/">goinvois</Link>
      </h1>

      <div className="flex justify-between h-16 mx-auto  text-gray-900 border-gray-900 border-y-2">
        <ul className="md:flex items-stretch">
          <li className="flex">
            <button className="flex items-center px-4 font-medium">
              <Link href="/login">Kenapa goinvois?</Link>
            </button>
          </li>
          <li className="flex">
            <button className="flex items-center px-4 font-medium">
              <Link href="/login">Hubungi kami</Link>
            </button>
          </li>
        </ul>
        <ul className="items-stretch hidden space-x-3 md:flex">
          {session ? (
            <li className="flex">
              <button
                onClick={() => signOut()}
                className="flex items-center px-4 font-medium"
              >
                Log keluar
              </button>
            </li>
          ) : (
            <>
              <li className="flex">
                <button className="flex items-center justify-center px-4 border-l-2 border-gray-900 font-medium  min-w-[150px]">
                  <Link href="/login">Log masuk</Link>
                </button>
              </li>
              <li className="flex">
                <button className="flex items-center justify-center px-4 border-l-2 border-gray-900 bg-gray-900 text-gray-100 font-medium min-w-[150px]">
                  <Link href="/register">Daftar</Link>
                </button>
              </li>
            </>
          )}
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
