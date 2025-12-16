import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Application from './routes.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </StrictMode>
);
