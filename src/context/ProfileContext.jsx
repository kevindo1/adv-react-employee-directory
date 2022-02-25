import { createContext, useEffect, useContext, useState, useMemo } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
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
  }, []);

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
