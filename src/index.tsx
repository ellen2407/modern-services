@tailwind base;
@tailwind components;
@tailwind utilities;

/* Dieser Teil verhindert, dass die Seite nach rechts wackelt oder abgeschnitten wird */
html, body {
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
}
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

