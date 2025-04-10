import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AuthContextProvider from './components/SideEffect/store/AuthContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
);
