import { Breadcrumb } from './Breadcrumb';

export const ContentArea = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <Breadcrumb />
      <div className="pl-8 pt-8">{children}</div>
    </div>
  );
};
