import { SidebarHeader } from './SidebarHeader';
import { SidebarFooter } from './SidebarFooter';
import { SidebarMenu } from '../Sidebar/SidebarMenu';

export const Sidebar = () => {
  return (
    <div className="p-4 dark:bg-gray-900 dark:text-gray-100 flex flex-col">
      <div className="h-full flex flex-col space-y-4 border-b-2 border-b-gray-700">
        <SidebarHeader />
        <SidebarMenu />
      </div>
      <SidebarFooter />
    </div>
  );
};
