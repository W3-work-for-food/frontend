import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import React, { FC } from 'react';
import styles from './App.module.scss';
import Ambassadors from '@/pages/Ambassadors';
import Header from '@/components/Layout/Header/Header';
import Menu from '@/components/Layout/Menu/Menu';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/ambassadors" element={<Ambassadors />} />
    </Routes>
  );
};

interface TemplateProps {
  children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div className={styles.template}>
      <Header />
      <Menu />
      {children}
    </div>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <Template>
        <App />
      </Template>
    </BrowserRouter>
  );
};

export default WrappedApp;
