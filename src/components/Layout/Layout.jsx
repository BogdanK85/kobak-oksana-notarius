import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Wraper } from './Layout.styled';

export const Layout = () => {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <Wraper>
      <Suspense fallback={<div>Loading page...</div>}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </Wraper>
  );
};
