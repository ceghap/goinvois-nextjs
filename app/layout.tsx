import { ContentArea } from '../components/common/ContentArea';
import { Sidebar } from '../components/common/Sidebar';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          <Sidebar />
          <ContentArea>{children}</ContentArea>
        </div>
      </body>
    </html>
  );
}
