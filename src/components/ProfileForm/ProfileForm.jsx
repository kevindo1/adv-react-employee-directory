import React from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useUser } from '../../context/UserContext';
import { useProfile } from '../../context/ProfileContext';

export default function ProfileForm({ onSubmit }) {
  const { user } = useUser();
  const { profile } = useProfile();
  const { handleFormChange, formState, formError, setFormError } = useForm(
    profile
      ? {
          name: profile.name,
          email: profile.email,
          birthday: profile.birthday,
          bio: profile.bio,
        }
      : { name: '', email: user.email, birthday: '', bio: '' }
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, birthday, bio } = formState;
    try {
      await onSubmit(name, email, birthday, bio);
    } catch (error) {
      setLoading(false);
      setFormError(error.message);
    }
  };

  return (
    <>
      {loading ? (
        'Loading..'
      ) : (
        <div className="flex-col text-slate-200">
          <form className="ml-16 mt-8" onSubmit={handleSubmit}>
            <label className="flex mt-4">Name: </label>
            <input
              className="flex mt-4 text-black"
              type="name"
              name="name"
              value={formState.name}
              onChange={handleFormChange}
            />
            <label className="flex mt-4">Email: </label>
            <input
              className="flex mt-4 text-black"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleFormChange}
            />
            <label className="flex mt-4">Birthday: </label>
            <input
              className="flex mt-4 text-black"
              type="date"
              name="birthday"
              value={formState.birthday}
              onChange={handleFormChange}
            />
            <label className="flex mt-4">Bio: </label>
            <input
              className="flex mt-4 text-black"
              type="text"
              name="bio"
              value={formState.bio}
              onChange={handleFormChange}
            />
          </form>
          {formError}
        </div>
      )}
    </>
  );
}
