import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage';

// Render React app
const rootElement = document.getElementById('app');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  );
}
