import Link from 'next/link';

export const SidebarHeader = () => {
  return (
    <div className="flex items-center p-2 space-x-4 ">
      <div className=" border-2 border-violet-400 w-32 px-4 py-2">
        <Link href="/home">
          <img src="/logo.png" className="" />
        </Link>
      </div>
    </div>
  );
};
