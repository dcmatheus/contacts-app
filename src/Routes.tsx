import { Routes as Switch, Route, Navigate } from 'react-router-dom';
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
          <div>sgf</div>
        }
      />
      <Route
        path="/contacts/edit/:id"
        element={
          <div>sgf</div>
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
