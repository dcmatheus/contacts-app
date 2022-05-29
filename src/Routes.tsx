import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<LoginPage />} />
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
