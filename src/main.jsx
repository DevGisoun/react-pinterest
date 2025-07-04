import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // 전역 CSS 주입.
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
