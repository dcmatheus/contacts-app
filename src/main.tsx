import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactsContext from 'context/ContactsContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContactsContext>
      <App />
    </ContactsContext>
  </React.StrictMode>,
);
