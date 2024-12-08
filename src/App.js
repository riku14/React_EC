import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';
import './App.css'; // グローバルなCSSファイルをインポート

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<ContentArea />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
