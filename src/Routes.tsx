import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import AddContactPage from 'pages/AddContactPage';
import EditContactPage from 'pages/EditContactPage';
import useBreakpoints from './hooks/useBreakpoints';
import PresentationPage from './pages/PresentationPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

export default function Routes() {
  const { mdScreen } = useBreakpoints();
  return (
    <Switch>
      <Route
        path="/"
        element={
          mdScreen ? (
            <Navigate to="/login" replace />
          ) : (
            <PresentationPage />
          )
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage />
        }
      />
      <Route
        path="/contacts"
        element={
          <ContactsPage />
        }
      />
      <Route
        path="/contacts/new"
        element={
          <AddContactPage />
        }
      />
      <Route
        path="/contacts/edit/:id"
        element={
          <EditContactPage />
        }
      />
      <Route
        path="/not-found"
        element={
          <div>Not Found</div>
        }
      />
      <Route
        path="*"
        element={<Navigate to="/not-found" replace />}
      />
    </Switch>
  );
}
