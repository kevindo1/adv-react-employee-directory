import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const history = useHistory();
  const { setUser } = useUser();

  return <div>Login</div>;
}
