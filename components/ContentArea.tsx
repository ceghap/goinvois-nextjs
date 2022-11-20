import { Breadcrumb } from './Breadcrumb';

interface Props {
  children: React.ReactNode;
}

export const ContentArea = ({ children }: Props) => {
  return (
    <div className="h-screen w-full dark:bg-gray-900 relative">
      <Breadcrumb />
      <div className="p-4 pb-10 h-full overflow-auto">{children}</div>
    </div>
  );
};
