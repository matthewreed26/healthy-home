import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/common/primary/app/App';
import { AppProvide } from '@/common/primary/app/AppContext';
import Router from '@/router';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App appProvide={AppProvide} router={Router} />
  </React.StrictMode>
);
