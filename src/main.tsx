import FontFaceObserver from 'fontfaceobserver';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n.ts';

const montserrat = new FontFaceObserver("Montserrat");

montserrat.load().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
