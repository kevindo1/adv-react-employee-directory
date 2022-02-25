import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { signInUser, signUpUser } from '../../services/users';
import AuthForm from '../../components/AuthForm/AuthForm';
import { Link } from 'react-router-dom';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <AuthForm
        onSubmit={handleAuth}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />
      {isSigningUp ? (
        <p className="ml-16 mt-8 text-slate-200">
          Have an account?{' '}
          <Link to="/login" className="text-cyan-500 hover:text-cyan-300">
            Sign In
          </Link>
        </p>
      ) : (
        <p className="ml-16 mt-8 text-slate-200">
          Click to{' '}
          <Link to="/register" className="text-cyan-500 hover:text-cyan-300">
            Sign Up!
          </Link>
        </p>
      )}
    </div>
  );
}
