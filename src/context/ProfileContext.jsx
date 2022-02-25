import { createContext, useEffect, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const { user } = useUser();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await getProfile();
        if (profile.length > 0) {
          setProfile(resp);
        }
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      }
    };
    fetchProfile();
  }, [user]);

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useProfile must be used inside ProfileProvider');
  }

  return context;
};

export { ProfileContext, ProfileProvider, useProfile };
