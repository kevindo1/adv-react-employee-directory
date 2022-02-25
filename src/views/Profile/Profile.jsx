import React from 'react';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const { name, email, bio, birthday } = useProfile();

  return (
    <div>
      <h1 className="text-slate-200 mt-8 ml-16 text-3xl">Profile</h1>
    </div>
  );
}
