import * as React from 'react';
import useAuth from '../hooks/useAuth';

export default function DashboardPage(): JSX.Element {
  const { logoutUser } = useAuth();
  return (
    <div>
      <p>You are in!</p>
      <button onClick={() => logoutUser()}>Logout</button>
    </div>
  );
}
