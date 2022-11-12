import { ContentArea } from '@components/common/ContentArea';
import { Sidebar } from '@components/common/Sidebar';
import '@styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
          <Sidebar />
          <ContentArea>{children}</ContentArea>
        </div>
      </body>
    </html>
  );
}
