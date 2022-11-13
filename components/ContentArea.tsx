import { Breadcrumb } from './Breadcrumb';

interface Props {
  children: React.ReactNode;
}

export const ContentArea = ({ children }: Props) => {
  return (
    <div className="h-screen w-full dark:bg-gray-700 relative">
      <Breadcrumb />
      <div className="p-4 h-full">{children}</div>
    </div>
  );
};
