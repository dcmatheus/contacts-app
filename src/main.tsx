import React from 'react';
import ContactsContext from 'Context/ContactsContext';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContactsContext>
      <App />
    </ContactsContext>
  </React.StrictMode>,
);
