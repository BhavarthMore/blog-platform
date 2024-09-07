// app/layout.tsx

import { ReactNode } from 'react';
import './globals.css'; // Import global styles

// app/layout.tsx

// ... other imports

import MyNavbar from './components/Navbar'; // Adjust the path if needed

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header >
          <MyNavbar /> {/* Render the navbar component */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};


export default Layout;
