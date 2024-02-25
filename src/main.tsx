import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import WrappedApp from '@components/Layout/App/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
