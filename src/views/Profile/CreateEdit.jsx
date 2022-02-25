import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useProfile } from '../../context/ProfileContext';
import { createProfile, updateProfile } from '../../services/profiles';
import { useHistory } from 'react-router-dom';

export default function CreateEdit({ isCreatingProfile = false }) {
  const { setProfile } = useProfile();
  const history = useHistory();

  const handleProfile = async (name, email, birthday, bio) => {
    try {
      if (isCreatingProfile) {
        await createProfile(name, email, birthday, bio);
        history.push('/profile');
      } else {
        const resp = await updateProfile(name, email, birthday, bio);
        setProfile({
          name: resp.name,
          email: resp.email,
          birthday: resp.birthday,
          bio: resp.bio,
        });
        history.push('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {isCreatingProfile ? 'Create a new profile!' : 'Edit your profile'}
      <div>
        <h1 className="text-slate-200 mt-8 ml-16 text-3xl">Profile</h1>
        <h1 className="text-slate-200 mt-8 ml-16 text-2xl">
          <ProfileForm onSubmit={handleProfile} />
        </h1>
      </div>
    </>
  );
}
