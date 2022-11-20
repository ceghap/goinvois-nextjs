import { Breadcrumb } from './Breadcrumb';

interface Props {
  children: React.ReactNode;
}

export const ContentArea = ({ children }: Props) => {
  return (
    <div className="w-full dark:bg-gray-900 relative col-span-5 col-start-2">
      <Breadcrumb />
      <div className="p-4 pb-10">{children}</div>
    </div>
  );
};
