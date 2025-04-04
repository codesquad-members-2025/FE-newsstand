import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

//entry point(root) 요소 생성해서 render시키기
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
