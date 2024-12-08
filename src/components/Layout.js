import React from 'react';
import Header from '../Header';
import ContentArea from '../ContentArea';
import Footer from '../Footer';

const Layout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
      <ContentArea />
    </div>
    <Footer />
  </div>
);

export default Layout;
