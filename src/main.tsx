import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

import App from './App';
import { AuthProvider } from './firebase/AuthContext'; // Import your AuthProvider
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>

);
