import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const history = useHistory();
  const { profile, loading } = useProfile();

  const handleClick = () => {
    history.push('/profile/edit');
  };

  return (
    <>
      {loading}
      {!loading && profile.name ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Birthday: {profile.birthday}</p>
          <p>Bio: {profile.bio}</p>
        </div>
      ) : (
        <Redirect to="/profile/create" />
      )}
      <div>
        <button onClick={handleClick}>Edit profile</button>
      </div>
    </>
  );
}
