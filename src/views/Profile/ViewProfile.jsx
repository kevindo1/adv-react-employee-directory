import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

export default function Profile() {
  const history = useHistory();
  const { profile, loading } = useProfile();
  const button =
    'inline-block ml-16 text-sm px-4 py-2 leading-none border rounded text-slate-200 border-slate-200 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0';

  const handleClick = () => {
    history.push('/profile/edit/');
  };

  return (
    <>
      {loading && <p>Loading..</p>}
      {!loading && profile.name ? (
        <div className="text-slate-200">
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Birthday: {profile.birthday}</p>
          <p>Bio: {profile.bio}</p>
        </div>
      ) : (
        ''
      )}
      <div className="mt-8">
        <Link to="/profile/create" className="text-slate-200">
          CREATE PROFILE
        </Link>
        <button onClick={handleClick} className={button}>
          Edit profile
        </button>
      </div>
    </>
  );
}
