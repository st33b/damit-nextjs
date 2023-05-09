import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.scss';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Dallas Area Masters Invitational Tournament (DAMIT)',
  description: 'A React app using NextJS and MDBootstrap',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
