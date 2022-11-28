import { SidebarFooter } from './SidebarFooter';
import { SidebarHeader } from './SidebarHeader';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar = () => {
  return (
    <div className="p-4 dark:bg-gray-900 dark:text-gray-100 h-screen flex flex-col justify-between w-52 fixed">
      <div className="flex flex-col space-y-4 ">
        <SidebarHeader />
        <SidebarMenu />
      </div>
      <SidebarFooter />
    </div>
  );
};
