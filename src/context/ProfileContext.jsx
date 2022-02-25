import { createContext, useEffect, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const resp = await getProfile();
        if (resp.length > 0) {
          setProfile(resp[0]);
        }
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  console.log('CONTEXT', profile);
  console.log('CONTEXT', loading);
  return (
    <ProfileContext.Provider value={{ profile, setProfile, loading }}>
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
