import { SidebarHeader } from './SidebarHeader';
import { SidebarFooter } from './SidebarFooter';
import { SidebarMenu } from '../Sidebar/SidebarMenu';

export const Sidebar = () => {
  return (
    <div className="h-screen p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100 flex flex-col justify-between">
      <div className="h-full flex flex-col space-y-4 border-b-2 border-b-gray-700">
        <SidebarHeader />
        <SidebarMenu />
      </div>
      <SidebarFooter />
    </div>
  );
};
