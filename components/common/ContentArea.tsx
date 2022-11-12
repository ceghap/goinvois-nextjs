import { Breadcrumb } from './Breadcrumb';

export const ContentArea = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <Breadcrumb />
      <div className="p-4">{children}</div>
    </div>
  );
};
