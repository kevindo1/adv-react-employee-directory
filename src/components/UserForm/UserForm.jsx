import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function UserForm({ label = 'Authenticate', onSubmit }) {
  const { handleFormChange, formState, formError, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      if (!email || password.length < 8)
        throw new Error('Email and password (8+ characters) required.');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <div className="flex-col text-slate-200">
      <form className="ml-16 mt-8" onSubmit={handleSubmit}>
        <label className="flex mt-4">Email</label>
        <input
          className="flex mt-4 text-black"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleFormChange}
        />
        <label className="flex mt-4">Password</label>
        <input
          className="flex mt-4 text-black"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleFormChange}
        />
        <button
          type="submit"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-200 border-slate-200 hover:border-transparent hover:text-blue-500 hover:bg-white mt-8"
        >
          {loading ? 'Authenticating' : label}
        </button>
        {formError}
      </form>
    </div>
  );
}
