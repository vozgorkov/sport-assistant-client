import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import { GlobalStyle } from './shared-styles/global';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
